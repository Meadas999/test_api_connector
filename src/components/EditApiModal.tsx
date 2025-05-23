import React, { useState, useEffect } from "react";
import { 
  Modal, 
  Box, 
  Button, 
  TextField, 
  IconButton 
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

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

type Api = {
  id: string;
  name: string;
  description: string | null;
  baseurl: string;
};

type EditApiModalProps = {
  api: Api;
  onUpdate: (updatedApi: Api) => void;
};

export default function EditApiModal({ api, onUpdate }: EditApiModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(api.name);
  const [description, setDescription] = useState(api.description || "");
  const [baseurl, setBaseurl] = useState(api.baseurl);

  // Update state when api prop changes
  useEffect(() => {
    setName(api.name);
    setDescription(api.description || "");
    setBaseurl(api.baseurl);
  }, [api]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    // Validate required fields
    if (!name || !baseurl) {
      alert("Name and Base URL are required");
      return;
    }

    const updatedApi = {
      ...api,
      name,
      description,
      baseurl,
    };

    // Update the API in the database
    try {
      const response = await fetch(`/api/applications/${api.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedApi),
      });

      if (response.ok) {
        const result = await response.json();
        onUpdate(result);
        handleClose();
      } else {
        // Handle error
        console.error("Error updating API");
        alert("Failed to update API");
      }
    } catch (error) {
      console.error("Error updating API:", error);
      alert("Failed to update API");
    }
  };

  return (
    <>
      <IconButton aria-label="Edit" onClick={handleOpen} size="small">
        <EditIcon fontSize="small" />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2>Edit API</h2>
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
            label="Base URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={baseurl}
            onChange={(e) => setBaseurl(e.target.value)}
            required
          />
          <Button 
            variant="contained" 
            onClick={handleSubmit} 
            sx={{ mt: 2 }}
          >
            Update API
          </Button>
        </Box>
      </Modal>
    </>
  );
}