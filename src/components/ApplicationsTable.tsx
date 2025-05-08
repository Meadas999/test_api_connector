'use client';
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import Button from "@mui/material/Button";
import { redirect } from "next/navigation";

type Props = {
  apis: {
    id: string;
    name: string;
    description: string | null;
    baseurl: string;
    connections: string;
    authType: string;
    endpointCount: number;
  }[];
};
export default function ApplicationsTable({ apis }: Props) {
  console.log(apis);
  console.log();
  
  

const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    redirect(`/applications/${id}`); // Redirect to the company details page
    //do whatever you want with the row
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "application", headerName: "API", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
    { field: "baseurl", headerName: "Base URL", width: 130 },
    { field: "authType", headerName: "Auth Type", width: 130 },
    { field: "connections", headerName: "Connections", width: 130 },
    { field: "endpoints", headerName: "Endpoints", width: 130 },
    { field: "actions", headerName: "Actions", width: 175, renderCell: (params) => {
      return (
        <Button
          onClick={(e) => onButtonClick(e, params.row.id)}
          variant="contained">
          Details
        </Button>
      );
    }},
  ];

  const rows = apis.map((a) => ({
    id: a.id,
    application: a.name,
    description: a.description,
    baseurl: a.baseurl,
    connections: a.connections,
    authType: a.authType || "No Auth",
    endpoints: String(a.endpointCount),
    
  }));

  // Set the initial state for pagination
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}