'use client';
import { useState, useEffect, use } from 'react';
import styles from "@/app/page.module.css";
import EndpointsTable from "@/components/EndpointsTable";
import Breadcrumb from "@/components/Breadcrumb";
import { Box, Typography, Container } from '@mui/material';

type EndpointType = {
  id: string;
  name: string;
  description: string | null;
  method: string;
  path: string;
  targetendpointId: string | null;
};

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params);
  const [endpoints, setEndpoints] = useState<EndpointType[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiName, setApiName] = useState('');

  const breadcrumbItems = [
    { label: 'Companies', href: '/companies' },
    { label: apiName || 'Loading...', current: true }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch API info for breadcrumb
        const apiResponse = await fetch(`/api/applications/${id}`);
        if (apiResponse.ok) {
          const apiData = await apiResponse.json();
          setApiName(apiData.name);
        }

        // Fetch endpoints
        const response = await fetch(`/api/endpoints?apiId=${id}`);
        if (response.ok) {
          const data = await response.json();
          setEndpoints(data);
        } else {
          console.error("Failed to fetch endpoints");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);
  
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
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Configured Endpoints
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage endpoints and their mappings for {apiName}.
        </Typography>
      </Box>
      
      <Box className="table-container">
        <EndpointsTable endpoints={endpoints} apiId={id} />
      </Box>
    </Container>
  );
}