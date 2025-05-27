'use client';

import { useState, useEffect,use } from 'react';
import styles from "@/app/page.module.css";
import ApplicationsTable from "@/components/ApplicationsTable";
import CreateApiModal from "@/components/CreateApiModal";
import { notFound } from 'next/navigation';

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
  params: Promise< { id: string }>
}) {
  const [apis, setApis] = useState<Api[]>([]);
  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const { id } =  use(params);

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
        // Safely extract endpoint target names with optional chaining
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
    // Add the new API to the list
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
        // Remove the deleted API from the list
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
    return <div className={styles.page}>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>APIs for {companyName}</h1>
          <CreateApiModal 
            onCreate={handleCreateApi} 
            companyId={id} 
          />
        </div>
        <p>Manage APIs for this company</p>
        
        <ApplicationsTable 
          apis={apis} 
          onDelete={handleDeleteApi}
          onUpdate={handleUpdateApi}
        />
      </main>
    </div>
  );
}