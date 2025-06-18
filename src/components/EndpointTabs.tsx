'use client';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MappingTab from './mappingTab';
import WebhookLogsTab from './WebhookLogsTab';
import LogsTab from './LogsTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function EndpointTabs({endpointId} : {endpointId: string}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="endpoint tabs">
          <Tab label="Mappings" {...a11yProps(0)} />
          <Tab label="Api Logs" {...a11yProps(1)} />
          <Tab label="Webhook Logs" {...a11yProps(2)} />
          <Tab label="Settings" {...a11yProps(3)} />

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <MappingTab endpointId={endpointId} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <LogsTab endpointId={endpointId} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <WebhookLogsTab endpointId={endpointId} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Settings and configuration options
      </CustomTabPanel>
    </Box>
  );
}
