'use client';
// import { useState } from 'react';
import CompaniesTable from "@/components/CompaniesTable";
import styles from "../page.module.css";
import { useState, useEffect } from 'react'


export default function Companies() {
  
  
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCompanies() {
      setLoading(true)
      const response = await fetch('/api/companies')
      const data = await response.json()
      setCompanies(data)
      setLoading(false)
    }
    fetchCompanies()
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Companies</h1>
      <p>List of companies will be displayed here.</p>
      <CompaniesTable companies={companies}/>
      </main>
    </div>
  )
}