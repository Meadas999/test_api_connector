import { prisma } from "@/app/prisma";
import { Suspense, useEffect, useState } from "react";
import { mapping } from "../../prisma/app/generated/prisma/client"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "@/app/page.module.css";
import { Box, Button, Divider, Grid, IconButton, Paper, styled, TextField } from "@mui/material";


export default function MappingTab({ endpointId }: { endpointId: string }) {
  const [mapping, setMapping] = useState<mapping[]>([]);
  const [loading, setLoading] = useState(true);
  const [newSourceField, setNewSourceField] = useState("");
  const [newTargetField, setNewTargetField] = useState("");
  useEffect(() => {
    async function fetchmappings() {
      setLoading(true)
      const response = await fetch('/api/mapping?endpointId=' + endpointId)
      const data = await response.json()
      setMapping(data)
      setLoading(false)
    }
    fetchmappings()
  }, [endpointId]);

  const handleFieldChange = (id: string, field: "sourceField" | "targetField", value: string) => {
    setMapping((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, [field]: value } : m
      )
    );
  };

  const addMapping = () => {
    const newMapping = {
      id: Date.now().toString(), // Temporary ID for the new mapping
      sourceField: newSourceField,
      targetField: newTargetField,
      endpointId: endpointId, // Add endpointId
      name: "Objectkenmerk", // Add a default or placeholder name
    };
    setMapping((prev) => [...prev, newMapping]);
    const createMapping = async () => {
      const response = await fetch('/api/mapping?endpointId=' + endpointId, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMapping),
      });
      if (response.ok) {
        // Handle success TODO replace with toast or snackbar
        console.log("Mapping created successfully");
      } else {
        // Handle error TODO replace with toast or snackbar
        console.error("Error creating mapping");
      }
    };
    createMapping();
    // Reset the input fields after adding the mapping

    setNewSourceField("");
    setNewTargetField("");
  };

  const updateMappings = async () => {
    setLoading(true);
    const response = await fetch('/api/mapping?endpointId=' + endpointId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mapping),
    });
    if (response.ok) {
      // Handle success TODO replace with toast or snackbar
      console.log("Mappings updated successfully");
    }
    setLoading(false);
  }

  const deleteMapping = async (id: string) => {
    const response = await fetch('/api/mapping?id=' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      setMapping((prev) => prev.filter((m) => m.id !== id));
      // Handle success TODO replace with toast or snackbar
      console.log("Mapping deleted successfully");
    } else {
      // Handle error TODO replace with toast or snackbar
      console.error("Error deleting mapping");
    }
  }




  if (loading) {
    return <div> <Backdrop open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop></div>
  }



  return (
    <div >

      <h1>Mappings</h1>
      <p>List of companies will be displayed here.</p>
      <div className={styles.mappingTable}>

        <Box sx={{ flexGrow: 1 }} >
          {mapping.map((m: mapping) => (
            <Grid container spacing={2} key={m.id} sx={{ marginBottom: 2 }}>
              <Grid size={4}>
                <TextField id="outlined-basic" label="Source field" variant="outlined" value={m.sourceField} onChange={(e) => handleFieldChange(m.id, "sourceField", e.target.value)} />
              </Grid>
              <Grid size={4}>
                <TextField id="outlined-basic" label="Target field" variant="outlined" value={m.targetField} onChange={(e) => handleFieldChange(m.id, "targetField", e.target.value)} />
              </Grid>
              <Grid size={2}>
                <IconButton aria-label="delete" onClick={(e) => {deleteMapping(m.id)}}>
                  <DeleteIcon />
                </IconButton>
              </Grid>

            </Grid>

          ))}
        </Box>
        <Divider component="li" />
        <Box sx={{ marginTop: 2 }}>
          <TextField
            label="New Source Field"
            variant="outlined"
            value={newSourceField}
            onChange={(e) => setNewSourceField(e.target.value)}
          />
          <TextField
            label="New Target Field"
            variant="outlined"
            value={newTargetField}
            onChange={(e) => setNewTargetField(e.target.value)}
            sx={{ marginLeft: 2 }}
          />
          <Button
            variant="contained"
            onClick={addMapping}
            sx={{ marginLeft: 2 }}
          >
            Add Mapping
          </Button>
        </Box>
        <Button className={styles.mappingUpdateButton} variant="contained" onClick={updateMappings}>Update Mappings</Button>
      </div>
    </div>
  )
}