'use client';
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import * as React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateEndpointModal from "./CreateEndpointModal";
import EditEndpointModal from "./EditEndpointModal";
import EndpointTabs from "./EndpointTabs";

type Props = {
  endpoints: {
    id: string;
    name: string;
    description: string | null;
    method: string;
    path: string;
    targetendpointId: string | null;
  }[];
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflow: 'auto'
};

function ChildModal({ endpointId }: { endpointId: string }) {
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} variant="contained" size="small">Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <EndpointTabs endpointId={endpointId} />
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function EndpointsTable({ endpoints, apiId }: Props & { apiId: string }) {
  const [rows, setRows] = useState(
    endpoints.map((a) => ({
      id: a.id,
      name: a.name,
      description: a.description,
      method: a.method,
      path: a.path,
      targetendpointId: a.targetendpointId,
      // Store the original endpoint data for the edit modal
      originalData: a,
    }))
  );

  const handleCreateEndpoint = (newEndpoint: any) => {
    setRows((prev) => [...prev, {
      ...newEndpoint,
      originalData: newEndpoint
    }]);
  };

  const handleUpdateEndpoint = (updatedEndpoint: any) => {
    setRows(rows.map(row => 
      row.id === updatedEndpoint.id 
        ? {
            ...row,
            name: updatedEndpoint.name,
            description: updatedEndpoint.description,
            method: updatedEndpoint.method,
            path: updatedEndpoint.path,
            targetendpointId: updatedEndpoint.targetendpointId,
            originalData: {
              ...updatedEndpoint
            }
          }
        : row
    ));
  };

  const handleDeleteEndpoint = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this endpoint?")) {
      try {
        const response = await fetch(`/api/endpoints/${id}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          // Remove the deleted endpoint from the rows
          setRows(rows.filter(row => row.id !== id));
        } else {
          alert("Failed to delete endpoint");
        }
      } catch (error) {
        console.error("Error deleting endpoint:", error);
        alert("Failed to delete endpoint");
      }
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "method", headerName: "Method", width: 130 },
    { field: "path", headerName: "Endpoint URL", width: 130 },
    {
      field: "actions", 
      headerName: "Actions", 
      width: 230, 
      renderCell: (params) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ChildModal endpointId={params.row.id} />
            
            <div style={{ marginLeft: 8 }}>
              <EditEndpointModal 
                endpoint={params.row.originalData} 
                onUpdate={handleUpdateEndpoint} 
              />
            </div>
            
            <IconButton 
              aria-label="delete" 
              onClick={() => handleDeleteEndpoint(params.row.id)}
              size="small"
              style={{ marginLeft: 4 }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        );
      }
    },
  ];

  // Set the initial state for pagination
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <div style={{ float: "right", margin: "10px" }}>
        <CreateEndpointModal onCreate={handleCreateEndpoint} apiId={apiId} />
      </div>
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