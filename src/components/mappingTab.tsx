import { prisma } from "@/app/prisma";
import { Suspense, useEffect, useState } from "react";
import { mapping } from "../../prisma/app/generated/prisma/client"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles from "@/app/page.module.css";
import { Box, Button, Grid, Paper, styled, TextField } from "@mui/material";

  
export default function MappingTab({endpointId } : {endpointId: string}) {
    const [mapping, setMapping] = useState<mapping[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      async function fetchmappings() {
        setLoading(true)
        const response = await fetch('/api/mapping?endpointId=' + endpointId)
        const data = await response.json()
        setMapping(data)
        setLoading(false)
      }
      fetchmappings()
    }, []);

    const handleFieldChange = (id: string, field: "sourceField" | "targetField", value: string) => {
      setMapping((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, [field]: value } : m
        )
      );
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
        {mapping.map((m: mapping) => (
            <Box sx={{ flexGrow: 1 }} key={m.id}>
            <Grid container spacing={2}>
              <Grid size={4}>
              <TextField id="outlined-basic" label="Source field" variant="outlined" value={m.sourceField} onChange={(e) => handleFieldChange(m.id, "sourceField", e.target.value)} />
              </Grid>
              <Grid size={4}>
              <TextField id="outlined-basic" label="Target field" variant="outlined" value={m.targetField} onChange={(e) => handleFieldChange(m.id, "targetField", e.target.value)} />
              </Grid>
              
            </Grid>
          </Box>
        ))}
        <Button className={styles.mappingUpdateButton}variant="contained" onClick={updateMappings}>Save Mappings</Button>
        </div>
      </div>
    )
}