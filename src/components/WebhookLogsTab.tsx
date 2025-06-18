'use client';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Paper, Backdrop, CircularProgress, Chip } from '@mui/material';

type WebhookLog = {
  id: string;
  endpointId: string;
  timestamp: string;
  method: string;
  url: string;
  requestBody: any; // Changed from string | null to any since it's JSON
  responseBody: any; // Changed from string | null to any since it's JSON
  statusCode: number | null;
  responseTime: number | null;
  success: boolean;
  status: string;
  type: string;
};

interface WebhookLogsTabProps {
  endpointId: string;
}

export default function WebhookLogsTab({ endpointId }: WebhookLogsTabProps) {
  const [logs, setLogs] = useState<WebhookLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebhookLogs = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/webhooklog?endpointId=${endpointId}`);
        if (response.ok) {
          const data = await response.json();
          setLogs(data);
        } else {
          console.error('Failed to fetch webhook logs');
        }
      } catch (error) {
        console.error('Error fetching webhook logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebhookLogs();
  }, [endpointId]);

  const columns: GridColDef[] = [
    { 
      field: 'timestamp', 
      headerName: 'Timestamp', 
      width: 180,
      valueFormatter: (value: string) => {
        return new Date(value).toLocaleString();
      }
    },
    { 
      field: 'type', 
      headerName: 'Type', 
      width: 120
    },
    { field: 'method', headerName: 'Method', width: 80 },
    { 
      field: 'status', 
      headerName: 'Status', 
      width: 100,
      renderCell: (params) => {
        const status = params.value;
        const color = status === 'success' ? 'success' : 
                     status === 'error' || status === 'failed' ? 'error' : 'warning';
        return <Chip label={status} color={color} size="small" />;
      }
    },
    { 
      field: 'statusCode', 
      headerName: 'HTTP Status', 
      width: 100,
      renderCell: (params) => {
        const status = params.value;
        if (!status) return '-';
        const color = status >= 200 && status < 300 ? 'success' : 
                     status >= 400 ? 'error' : 'warning';
        return <Chip label={status} color={color} size="small" />;
      }
    },
    { 
      field: 'responseTime', 
      headerName: 'Response Time (ms)', 
      width: 150,
      type: 'number',
      renderCell: (params) => {
        return params.value ? params.value : '-';
      }
    },
    { 
      field: 'success', 
      headerName: 'Success', 
      width: 100,
      renderCell: (params) => {
        return <Chip 
          label={params.value ? 'Success' : 'Failed'} 
          color={params.value ? 'success' : 'error'} 
          size="small" 
        />;
      }
    },
    { 
      field: 'requestBody', 
      headerName: 'Request Body', 
      width: 200,
      renderCell: (params) => {
        const body = params.value;
        if (!body) return '-';
        
        // Convert JSON object to string
        const bodyString = typeof body === 'object' ? JSON.stringify(body) : String(body);
        const truncated = bodyString.length > 50 ? `${bodyString.substring(0, 50)}...` : bodyString;
        return <span title={bodyString}>{truncated}</span>;
      }
    },
    { 
      field: 'responseBody', 
      headerName: 'Response Body', 
      width: 200,
      renderCell: (params) => {
        const body = params.value;
        if (!body) return '-';
        
        // Convert JSON object to string
        const bodyString = typeof body === 'object' ? JSON.stringify(body) : String(body);
        const truncated = bodyString.length > 50 ? `${bodyString.substring(0, 50)}...` : bodyString;
        return <span title={bodyString}>{truncated}</span>;
      }
    },
  ];

  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div>
      <h2>Webhook Logs</h2>
      <p>Webhook execution logs for this endpoint</p>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={logs}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 10 } },
          }}
          pageSizeOptions={[5, 10, 25]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}