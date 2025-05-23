'use client';
import { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";
import EndpointsTable from "@/components/EndpointsTable";

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
  params: { id: string }
}) {
  const [endpoints, setEndpoints] = useState<EndpointType[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchEndpoints = async () => {
      try {
        const response = await fetch(`/api/endpoints?apiId=${params.id}`);
        if (response.ok) {
          const data = await response.json();
          setEndpoints(data);
        } else {
          console.error("Failed to fetch endpoints");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching endpoints:", error);
        setLoading(false);
      }
    };
    
    fetchEndpoints();
  }, [params.id]);
  
  if (loading) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Configured endpoints</h1>
        <p>List of endpoints which can be mapped.</p>
        <EndpointsTable endpoints={endpoints} apiId={params.id} />
      </main>
    </div>
  );
}