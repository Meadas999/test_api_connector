import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Modal, Box, Button, TextField, MenuItem, IconButton, Autocomplete } from "@mui/material";
import { Api } from "@mui/icons-material";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
type Endpoint = {
    id: string;
    name: string;
    path: string;
  };

type CreateEndpointModalProps = {
  onCreate: (newEndpoint: any) => void;
  apiId: string; // Pass the related API ID as a prop

  
};

export default function CreateEndpointModal({ onCreate, apiId }: CreateEndpointModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [method, setMethod] = useState("");
  const [path, setPath] = useState("");
  const [targetEndpointId, setTargetEndpointId] = useState<string | null>(null);
  const [existingEndpoints, setExistingEndpoints] = useState<Endpoint[]>([]);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchEndpoints = async () => {
      const response = await fetch('/api/endpoints');
      if (response.ok) {
        const data = await response.json();
        setExistingEndpoints(data);
      } else {
        console.error("Error fetching existing endpoints");
      }
    };
    fetchEndpoints();
  }, []);
  const handleSubmit = async () => {
    const newEndpoint = {
      id: Date.now().toString(), // Temporary ID
      name,
      description,
      method,
      path,
      targetendpointId: targetEndpointId,
      apiId,
    };
    ///Call the Post endpoint to create the new endpoint in the database
    const createEndpoint = async () => {
      console.log("Creating endpoint:", newEndpoint);
      const response = await fetch('/api/endpoints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEndpoint),
      });
      if (response.ok) {
        // Handle success TODO replace with toast or snackbar
        console.log("Endpoint created successfully");
      } else {
        // Handle error TODO replace with toast or snackbar
        console.error("Error creating endpoint");
      }
    };
    createEndpoint();
    onCreate(newEndpoint);
    handleClose();
  };

  return (
    <>

      <IconButton aria-label="Add" onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2>Create New Endpoint</h2>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Method"
            variant="outlined"
            fullWidth
            margin="normal"
            select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <MenuItem value="GET">GET</MenuItem>
            <MenuItem value="POST">POST</MenuItem>
            <MenuItem value="PUT">PUT</MenuItem>
            <MenuItem value="DELETE">DELETE</MenuItem>
          </TextField>
          <TextField
            label="Path"
            variant="outlined"
            fullWidth
            margin="normal"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
          <Autocomplete
            options={existingEndpoints}
            getOptionLabel={(option) => `${option.name} (${option.path})`}
            renderInput={(params) => <TextField {...params} label="Target Endpoint" variant="outlined" margin="normal" />}
            onChange={(event, value) => setTargetEndpointId(value ? value.id : "")}
            fullWidth
          />
          <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
}