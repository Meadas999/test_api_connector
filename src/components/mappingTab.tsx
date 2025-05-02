import { prisma } from "@/app/prisma";
import { Suspense, useEffect, useState } from "react";
import { mapping } from "../../prisma/app/generated/prisma/client"
import CompaniesTable from "./CompaniesTable";
import styles from "@/app/page.module.css";
import { Box, Grid, Paper, styled, TextField } from "@mui/material";

  
export default function MappingTab({endpointId } : {endpointId: string}) {
    const [mapping, setMapping] = useState([]);
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
    }, [])
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div >
        
        <h1>Mappings</h1>
        <p>List of companies will be displayed here.</p>
        {mapping.map((m: mapping) => (
            <Box sx={{ flexGrow: 1 }} key={m.id}>
            <Grid container spacing={2}>
              <Grid size={4}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </Grid>
              <Grid size={4}>
                
              </Grid>
              
            </Grid>
          </Box>

          
          
          
        ))}
        
       
      </div>
    )
}