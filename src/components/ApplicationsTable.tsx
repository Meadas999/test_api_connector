'use client';
import { useState } from 'react';
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { redirect } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditApiModal from './EditApiModal';

type Api = {
  id: string;
  name: string;
  description: string | null;
  baseurl: string;
  connections: string;
  authType: string;
  endpointCount: number;
};

type Props = {
  apis: Api[];
  onDelete?: (id: string) => void;
  onUpdate?: (updatedApi: any) => void;
};

export default function ApplicationsTable({ apis, onDelete, onUpdate }: Props) {
  const [rows, setRows] = useState(apis.map((a) => ({
    id: a.id,
    application: a.name,
    description: a.description,
    baseurl: a.baseurl,
    connections: a.connections,
    authType: a.authType || "No Auth",
    endpoints: String(a.endpointCount),
    // Store the original api data for the edit modal
    originalData: a,
  })));

  const handleDelete = async (id: string) => {
    if (!onDelete) return;
    
    if (window.confirm("Are you sure you want to delete this API?")) {
      onDelete(id);
    }
  };

  const handleUpdate = (updatedApi: any) => {
    if (!onUpdate) return;
    
    onUpdate(updatedApi);
    
    // Update the rows state to reflect changes
    setRows(rows.map(row => 
      row.id === updatedApi.id 
        ? {
            ...row,
            application: updatedApi.name,
            description: updatedApi.description,
            baseurl: updatedApi.baseurl,
            originalData: {
              ...row.originalData,
              name: updatedApi.name,
              description: updatedApi.description,
              baseurl: updatedApi.baseurl,
            }
          }
        : row
    ));
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    redirect(`/applications/${id}`);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "application", headerName: "API", width: 130 },
    { field: "description", headerName: "Description", width: 130 },
    { field: "baseurl", headerName: "Base URL", width: 130 },
    { field: "authType", headerName: "Auth Type", width: 130 },
    { field: "connections", headerName: "Connections", width: 130 },
    { field: "endpoints", headerName: "Endpoints", width: 100 },
    { 
      field: "actions", 
      headerName: "Actions", 
      width: 175, 
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              onClick={(e) => onButtonClick(e, params.row.id)}
              variant="contained"
              size="small"
              sx={{ mr: 1 }}
            >
              Details
            </Button>
            
            {onUpdate && (
              <EditApiModal 
                api={params.row.originalData} 
                onUpdate={handleUpdate} 
              />
            )}
            
            {onDelete && (
              <IconButton 
                aria-label="delete" 
                onClick={() => handleDelete(params.row.id)}
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
          </div>
        );
      }
    },
  ];

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