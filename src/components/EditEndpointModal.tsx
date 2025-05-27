'use client';
import { useState, useEffect } from 'react';
import { 
  Modal, 
  Box, 
  TextField, 
  Button, 
  IconButton,
  MenuItem,
  Autocomplete
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const modalStyle = {
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

type EndpointType = {
  id: string;
  name: string;
  description: string | null;
  method: string;
  path: string;
  apiId: string;
  targetendpointId: string | null;
};

type TargetEndpoint = {
  id: string;
  name: string;
  path: string;
};

type EditEndpointModalProps = {
  endpoint: EndpointType;
  onUpdate: (updatedEndpoint: EndpointType) => void;
};

export default function EditEndpointModal({ endpoint, onUpdate }: EditEndpointModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(endpoint.name);
  const [description, setDescription] = useState(endpoint.description || "");
  const [method, setMethod] = useState(endpoint.method);
  const [path, setPath] = useState(endpoint.path);
  const [targetEndpointId, setTargetEndpointId] = useState<string | null>(endpoint.targetendpointId);
  const [existingEndpoints, setExistingEndpoints] = useState<TargetEndpoint[]>([]);

  // Update state when endpoint prop changes
  useEffect(() => {
    setName(endpoint.name);
    setDescription(endpoint.description || "");
    setMethod(endpoint.method);
    setPath(endpoint.path);
    setTargetEndpointId(endpoint.targetendpointId);
  }, [endpoint]);

  // Fetch all available endpoints for the target dropdown
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    // Validate required fields
    if (!name || !method || !path) {
      alert("Name, Method, and Path are required");
      return;
    }

    const updatedEndpoint = {
      ...endpoint,
      name,
      description,
      method,
      path,
      targetendpointId: targetEndpointId
    };

    // Update the endpoint in the database
    try {
      console.log("Updating endpoint:", updatedEndpoint);
      const response = await fetch(`/api/endpoints/${endpoint.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEndpoint),
      });

      if (response.ok) {
        const result = await response.json();
        onUpdate(result);
        handleClose();
      } else {
        console.error("Error updating endpoint");
        alert("Failed to update endpoint");
      }
    } catch (error) {
      console.error("Error updating endpoint:", error);
      alert("Failed to update endpoint");
    }
  };

  return (
    <>
      <IconButton aria-label="Edit" onClick={handleOpen} size="small">
        <EditIcon fontSize="small" />
      </IconButton>

      <Modal 
        open={open} 
        onClose={handleClose}
        aria-labelledby="edit-endpoint-modal"
        aria-describedby="modal-to-edit-endpoint"
      >
        <Box sx={modalStyle}>
          <h2>Edit Endpoint</h2>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
            required
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
            required
          />
          <Autocomplete
            options={existingEndpoints}
            getOptionLabel={(option) => `${option.name} (${option.path})`}
            renderInput={(params) => <TextField {...params} label="Target Endpoint" variant="outlined" margin="normal" />}
            onChange={(event, value) => setTargetEndpointId(value ? value.id : null)}
            value={existingEndpoints.find(e => e.id === targetEndpointId) || null}
            fullWidth
          />
          <Button 
            variant="contained" 
            onClick={handleSubmit} 
            sx={{ mt: 2 }}
          >
            Update Endpoint
          </Button>
        </Box>
      </Modal>
    </>
  );
}