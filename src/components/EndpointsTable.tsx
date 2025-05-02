'use client';
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import * as React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { prisma } from "@/app/prisma";
import EndpointTabs from "./EndpointTabs";
import { useState, useEffect } from 'react'


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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
      <Button onClick={handleOpen} variant="contained">Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 800, height: 600 }}>
          <EndpointTabs endpointId={endpointId}/>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}



export default function EndpointsTable({ endpoints }: Props) {


  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.stopPropagation();
    // Redirect to the company details page
    //do whatever you want with the row
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "path", headerName: "Endpoint URL", width: 130 },
    {
      field: "actions", headerName: "Actions", width: 130, renderCell: (params) => {
        return (
          <ChildModal endpointId={params.row.id} />
        );
      }
    },
  ];

  const rows = endpoints.map((a) => ({
    id: a.id,
    name: a.name,
    description: a.description,
    method: a.method,
    path: a.path,
    mapping: a.targetendpointId




  }));

  // Set the initial state for pagination
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
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