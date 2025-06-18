'use client';
import { useState, useEffect } from 'react';
import { 
    Box, 
    Paper, 
    Typography, 
    Chip, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    Divider,
    Alert, 
    Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ApiLog = {
    id: string;
    status: string;
    method: string;
    requestBody: any;
    responseBody: any;
    errorMessage: string | null;
    statusCode: number;
    createdAt: string;
};

interface LogsTabProps {
    endpointId: string;
}

export default function LogsTab({ endpointId }: LogsTabProps) {
    const [logs, setLogs] = useState<ApiLog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogs = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/logs?endpointId=${endpointId}`);
                if (response.ok) {
                    const data = await response.json();
                    setLogs(data);
                } else {
                    console.error("Failed to fetch logs");
                }
            } catch (error) {
                console.error("Error fetching logs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLogs();
    }, [endpointId]);

    const successLogs = logs.filter(log => log.status === 'success');
    const errorLogs = logs.filter(log => log.status === 'error');

    const formatTimestamp = (timestamp: string) => {
        return new Date(timestamp).toLocaleString();
    };

    const LogItem = ({ log }: { log: ApiLog }) => (
        <Accordion key={log.id} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                    <Chip 
                        label={log.status} 
                        color={log.status === 'success' ? 'success' : 'error'} 
                        size="small" 
                    />
                    <Chip 
                        label={log.method} 
                        variant="outlined" 
                        size="small" 
                    />
                    <Chip 
                        label={log.statusCode} 
                        color={log.statusCode < 400 ? 'success' : 'error'} 
                        size="small" 
                    />
                    <Typography variant="body2" color="text.secondary">
                        {formatTimestamp(log.createdAt)}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    {log.errorMessage && (
                        <Grid size={{ xs: 12 }}>
                            <Alert severity="error">
                                <Typography variant="body2">{log.errorMessage}</Typography>
                            </Alert>
                        </Grid>
                    )}
                    
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h6" gutterBottom>Request Body</Typography>
                        <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
                            <pre style={{ fontSize: '12px', overflow: 'auto', margin: 0 }}>
                                {JSON.stringify(log.requestBody, null, 2)}
                            </pre>
                        </Paper>
                    </Grid>
                    
                    {log.responseBody && (
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h6" gutterBottom>Response Body</Typography>
                            <Paper sx={{ p: 2, bgcolor: 'grey.50' }}>
                                <pre style={{ fontSize: '12px', overflow: 'auto', margin: 0 }}>
                                    {JSON.stringify(log.responseBody, null, 2)}
                                </pre>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );

    if (loading) {
        return <Typography>Loading logs...</Typography>;
    }

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
                API Call Logs
            </Typography>
            
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" color="success.main" gutterBottom>
                        Successful Calls ({successLogs.length})
                    </Typography>
                    {successLogs.length === 0 ? (
                        <Typography variant="body2" color="text.secondary">
                            No successful calls yet
                        </Typography>
                    ) : (
                        successLogs.map(log => <LogItem key={log.id} log={log} />)
                    )}
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" color="error.main" gutterBottom>
                        Failed Calls ({errorLogs.length})
                    </Typography>
                    {errorLogs.length === 0 ? (
                        <Typography variant="body2" color="text.secondary">
                            No failed calls yet
                        </Typography>
                    ) : (
                        errorLogs.map(log => <LogItem key={log.id} log={log} />)
                    )}
                </Grid>
            </Grid>
        </Box>
    );
}