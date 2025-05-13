'use client';
// import { useState } from 'react';
import CompaniesTable from "@/components/CompaniesTable";
import styles from "../page.module.css";
import { useState, useEffect } from 'react'


export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCompanyName, setNewCompanyName] = useState("");

  useEffect(() => {
    
    fetchCompanies()
  }, [])

  async function fetchCompanies() {
      setLoading(true)
      const response = await fetch('/api/companies')
      const data = await response.json()
      setCompanies(data)
      setLoading(false)
    }

     async function addCompany() {
    if (!newCompanyName.trim()) return;
    const response = await fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCompanyName }),
    });
    if (response.ok) {
      setNewCompanyName("");
      fetchCompanies();
    }
  }
  async function deleteCompany(id: string) {
    const response = await fetch(`/api/companies?id=${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchCompanies();
    }
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Companies</h1>
        <p>List of companies will be displayed here.</p>
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            placeholder="New company name"
            value={newCompanyName}
            onChange={e => setNewCompanyName(e.target.value)}
          />
          <button onClick={addCompany}>Add Company</button>
        </div>
        <CompaniesTable companies={companies} onDelete={deleteCompany}/>
      </main>
    </div>
  )
}