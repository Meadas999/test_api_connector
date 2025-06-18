'use client';

import { useState, useEffect, use } from 'react';
import styles from "@/app/page.module.css";
import ApplicationsTable from "@/components/ApplicationsTable";
import CreateApiModal from "@/components/CreateApiModal";
import Breadcrumb from "@/components/Breadcrumb";
import { notFound } from 'next/navigation';
import { Box, Typography, Container } from '@mui/material';

type Api = {
  id: string;
  name: string;
  description: string | null;
  baseurl: string;
  connections: string;
  authType: string;
  endpointCount: number;
};

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const [apis, setApis] = useState<Api[]>([]);
  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const { id } = use(params);

  const breadcrumbItems = [
    { label: 'Companies', href: '/companies' },
    { label: companyName || 'Loading...', current: true }
  ];

  useEffect(() => {
    fetchCompanyAndApis();
  }, []);

  const fetchCompanyAndApis = async () => {
    setLoading(true);
    try {
      // Fetch company info
      const companyResponse = await fetch(`/api/companies/${id}`);
      if (!companyResponse.ok) {
        if (companyResponse.status === 404) {
          notFound();
        }
        throw new Error('Failed to fetch company');
      }
      const companyData = await companyResponse.json();
      setCompanyName(companyData.name);

      // Fetch APIs for this company
      const apisResponse = await fetch(`/api/applications?companyId=${id}`);
      if (!apisResponse.ok) {
        throw new Error('Failed to fetch APIs');
      }
      const apisData = await apisResponse.json();
      
      // Format the APIs for the table
      const formattedApis = apisData.map((api: any) => {
        const connections = api.endpoints?.filter((e: any) => e.targetendpoint)
          .map((e: any) => e.targetendpoint?.api?.name)
          .filter(Boolean)
          .join(", ") || "";
          
        return {
          id: api.id,
          name: api.name,
          description: api.description,
          baseurl: api.baseurl,
          connections: connections,
          authType: api.apiAuth?.type ?? 'None',
          endpointCount: api._count?.endpoints || 0,
        };
      });
      console.log("Formatted APIs: ", formattedApis);
      setApis(formattedApis);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateApi = (newApi: any) => {
    const formattedApi = {
      id: newApi.id,
      name: newApi.name,
      description: newApi.description,
      baseurl: newApi.baseurl,
      connections: "",
      authType: "None",
      endpointCount: 0,
    };
    setApis([...apis, formattedApi]);
  };

  const handleDeleteApi = async (id: string) => {
    try {
      const response = await fetch(`/api/companies?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setApis(apis.filter(api => api.id !== id));
      } else {
        console.error("Failed to delete API");
        alert("Failed to delete API");
      }
    } catch (error) {
      console.error("Error deleting API:", error);
      alert("Failed to delete API");
    }
  };

  const handleUpdateApi = (updatedApi: any) => {
    setApis(apis.map(api => 
      api.id === updatedApi.id 
        ? {
            ...api,
            name: updatedApi.name,
            description: updatedApi.description,
            baseurl: updatedApi.baseurl,
          }
        : api
    ));
  };

  if (loading) {
    return (
      <Container maxWidth={false} sx={{ py: 2 }}>
        <div>Loading...</div>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} sx={{ py: 2 }}>
      <Breadcrumb items={breadcrumbItems} />
      
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        mb: 3 
      }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            APIs for {companyName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage APIs and their endpoints for this company.
          </Typography>
        </Box>
        <CreateApiModal 
          onCreate={handleCreateApi} 
          companyId={id} 
        />
      </Box>
      
      <Box className="table-container">
        <ApplicationsTable 
          apis={apis} 
          onDelete={handleDeleteApi}
          onUpdate={handleUpdateApi}
        />
      </Box>
    </Container>
  );
}