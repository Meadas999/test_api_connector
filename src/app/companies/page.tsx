'use client';
import CompaniesTable from "@/components/CompaniesTable";
import Breadcrumb from "@/components/Breadcrumb";
import styles from "../page.module.css";
import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Button, Container } from '@mui/material';

export default function Companies() {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newCompanyName, setNewCompanyName] = useState("");

  const breadcrumbItems = [
    { label: 'Companies', current: true }
  ];

  useEffect(() => {
    fetchCompanies()
  }, [])

  async function fetchCompanies() {
    try {
      const response = await fetch('/api/companies');
      if (response.ok) {
        const data = await response.json();
        setCompanies(data);
      } else {
        console.error('Failed to fetch companies');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  async function addCompany() {
    if (!newCompanyName.trim()) return;
    
    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCompanyName.trim() }),
      });
      
      if (response.ok) {
        const newCompany = await response.json();
        setCompanies([...companies, newCompany]);
        setNewCompanyName("");
      }
    } catch (error) {
      console.error('Error adding company:', error);
    }
  }

  async function deleteCompany(id: string) {
    try {
      const response = await fetch(`/api/companies?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setCompanies(companies.filter(company => company.id !== id));
      }
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Container maxWidth={false} sx={{ py: 2 }}>
      <Breadcrumb items={breadcrumbItems} showBackButton={false} />
      
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Companies
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Manage your companies and their API configurations.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="New company name"
            value={newCompanyName}
            onChange={e => setNewCompanyName(e.target.value)}
            size="small"
            sx={{ flex: 1, maxWidth: 300 }}
          />
          <Button 
            variant="contained" 
            onClick={addCompany}
            disabled={!newCompanyName.trim()}
          >
            Add Company
          </Button>
        </Box>
      </Box>
      
      <Box className="table-container">
        <CompaniesTable companies={companies} onDelete={deleteCompany} />
      </Box>
    </Container>
  );
}