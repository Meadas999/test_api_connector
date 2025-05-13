
import styles from "@/app/page.module.css";
import { prisma } from "@/app/prisma";
import EndpointTabs from "@/components/EndpointTabs";
import EndpointsTable from "@/components/EndpointsTable";
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id  = (await params).id;
  const endpoints = await prisma.endpoint.findMany({
    where: {
      apiId: (await params).id,
    },
    
  });

  if (!endpoints) return notFound();

  const formattedendpoints = endpoints.map((e) => ({
    id: e.id,
    name: e.name, 
    description: e.description,
    method: e.method,
    path: e.path,
    targetendpointId: e.targetendpointId,
   
  }));

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Configured endpoints</h1>
        <p>List of endpoints which can be mapped.</p>
        <EndpointsTable endpoints={endpoints} apiId={id}/>
        
      </main>
    </div>
    
  );
}