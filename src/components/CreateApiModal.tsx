import React, { useState } from "react";
import { 
  Modal, 
  Box, 
  Button, 
  TextField, 
  IconButton 
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

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

type CreateApiModalProps = {
  onCreate: (newApi: any) => void;
  companyId: string;
};

export default function CreateApiModal({ onCreate, companyId }: CreateApiModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [baseurl, setBaseurl] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    // Validate required fields
    if (!name || !baseurl) {
      alert("Name and Base URL are required");
      return;
    }

    const newApi = {
      name,
      description,
      baseurl,
      companyId,
    };

    // Create the API in the database
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newApi),
      });

      if (response.ok) {
        const createdApi = await response.json();
        onCreate(createdApi);
        handleClose();
        // Reset form fields
        setName("");
        setDescription("");
        setBaseurl("");
      } else {
        // Handle error
        console.error("Error creating API");
        alert("Failed to create API");
      }
    } catch (error) {
      console.error("Error creating API:", error);
      alert("Failed to create API");
    }
  };

  return (
    <>
      <IconButton aria-label="Add" onClick={handleOpen} sx={{ mb: 2 }}>
        <AddIcon />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2>Create New API</h2>
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
            Create API
          </Button>
        </Box>
      </Modal>
    </>
  );
}