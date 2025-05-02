
import styles from "@/app/page.module.css";
import ApplicationsTable from "@/components/ApplicationsTable";
import { prisma } from "@/app/prisma";


import { notFound } from 'next/navigation';


export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const apis = await prisma.api.findMany({
    where: {
      companyId: (await params).id,
    },
    include: {
      apiAuth: {
        select: {
          type: true,
        },
      },
      endpoints:{
        select: {
          targetendpoint:{
            select: {
              api:{
                select:{
                  name: true,
                }
              },
          }
        }
      }},

      _count: {
        select: {
          endpoints: true,
        },
      },
    },
  });
  

  if (!apis) return notFound();
  console.log(apis);

  const formattedApis = apis.map((api) => ({
    id: api.id,
    name: api.name,
    description: api.description,
    baseurl: api.baseurl,
    connections: api.endpoints.map((e) => e.targetendpoint?.api.name).join(", "),
    authType: api.apiAuth?.type ?? 'None',
    endpointCount: api._count.endpoints,
  }));

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Api's</h1>
        <p>List of Api's will be displayed here.</p>
        <ApplicationsTable apis={formattedApis} />
      </main>
    </div>
  );
}