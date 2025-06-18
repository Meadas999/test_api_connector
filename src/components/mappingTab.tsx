'use client';
import { Suspense, useEffect, useState } from "react";
import { mapping } from "../../prisma/app/generated/prisma/client"
import { 
  Backdrop, 
  CircularProgress, 
  Box, 
  Button, 
  Divider, 
  Grid, 
  IconButton, 
  Paper, 
  TextField,
  Typography,
  Alert,
  Snackbar,
  Card,
  CardContent,
  Chip,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import styles from "@/app/page.module.css";

interface MappingWithEdit extends mapping {
  isEditing?: boolean;
  tempSourceField?: string;
  tempTargetField?: string;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
}

interface EndpointData {
  id: string;
  name: string;
  sourceExmpObj?: any;
  targetExmpObj?: any;
}

export default function MappingTab({ endpointId }: { endpointId: string }) {
  const [mappings, setMappings] = useState<MappingWithEdit[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newSourceField, setNewSourceField] = useState("");
  const [newTargetField, setNewTargetField] = useState("");
  const [newMappingName, setNewMappingName] = useState("");
  
  // JSON Example Objects
  const [sourceJsonText, setSourceJsonText] = useState("");
  const [targetJsonText, setTargetJsonText] = useState("");
  const [sourceJsonValid, setSourceJsonValid] = useState(true);
  const [targetJsonValid, setTargetJsonValid] = useState(true);
  const [sourceFields, setSourceFields] = useState<string[]>([]);
  const [targetFields, setTargetFields] = useState<string[]>([]);
  const [endpointData, setEndpointData] = useState<EndpointData | null>(null);
  
  const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; mappingId: string | null }>({
    open: false,
    mappingId: null
  });
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'success'
  });

  useEffect(() => {
    fetchMappings();
    fetchEndpointData();
  }, [endpointId]);

  const fetchMappings = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/mapping?endpointId=' + endpointId);
      if (response.ok) {
        const data = await response.json();
        setMappings(data);
      } else {
        showSnackbar('Failed to fetch mappings', 'error');
      }
    } catch (error) {
      showSnackbar('Error fetching mappings', 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchEndpointData = async () => {
    try {
      const response = await fetch(`/api/endpoints/${endpointId}`);
      if (response.ok) {
        const data = await response.json();
        setEndpointData(data);
        
        // Load existing JSON objects if they exist
        if (data.sourceExmpObj) {
          setSourceJsonText(JSON.stringify(data.sourceExmpObj, null, 2));
          setSourceFields(extractFields(data.sourceExmpObj));
        }
        if (data.targetExmpObj) {
          setTargetJsonText(JSON.stringify(data.targetExmpObj, null, 2));
          setTargetFields(extractFields(data.targetExmpObj));
        }
      }
    } catch (error) {
      console.error('Error fetching endpoint data:', error);
    }
  };

  // Function to extract all field paths from a nested object
  const extractFields = (obj: any, prefix = ''): string[] => {
    const fields: string[] = [];
    
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      Object.keys(obj).forEach(key => {
        const currentPath = prefix ? `${prefix}.${key.toLowerCase()}` : key.toLowerCase();
        
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          // Nested object - recursively extract fields
          fields.push(...extractFields(obj[key], currentPath));
        } else {
          // Leaf value - add the field path
          fields.push(currentPath);
        }
      });
    }
    
    return fields.sort();
  };

  const validateAndParseJson = (jsonText: string, isSource: boolean) => {
    try {
      if (jsonText.trim() === '') {
        if (isSource) {
          setSourceJsonValid(true);
          setSourceFields([]);
        } else {
          setTargetJsonValid(true);
          setTargetFields([]);
        }
        return;
      }

      const parsed = JSON.parse(jsonText);
      const fields = extractFields(parsed);
      
      if (isSource) {
        setSourceJsonValid(true);
        setSourceFields(fields);
      } else {
        setTargetJsonValid(true);
        setTargetFields(fields);
      }
    } catch (error) {
      if (isSource) {
        setSourceJsonValid(false);
        setSourceFields([]);
      } else {
        setTargetJsonValid(false);
        setTargetFields([]);
      }
    }
  };

  const saveJsonObjects = async () => {
    let sourceObj = null;
    let targetObj = null;

    try {
      if (sourceJsonText.trim()) {
        sourceObj = JSON.parse(sourceJsonText);
      }
      if (targetJsonText.trim()) {
        targetObj = JSON.parse(targetJsonText);
      }
    } catch (error) {
      showSnackbar('Invalid JSON format', 'error');
      return;
    }

    setSaving(true);
    try {
      const response = await fetch(`/api/endpoints/${endpointId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceExmpObj: sourceObj,
          targetExmpObj: targetObj
        }),
      });

      if (response.ok) {
        showSnackbar('Example objects saved successfully', 'success');
        await fetchEndpointData(); // Refresh data
      } else {
        showSnackbar('Failed to save example objects', 'error');
      }
    } catch (error) {
      showSnackbar('Error saving example objects', 'error');
    } finally {
      setSaving(false);
    }
  };

  const showSnackbar = (message: string, severity: SnackbarState['severity']) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const startEdit = (id: string) => {
    setMappings(prev => prev.map(m => 
      m.id === id 
        ? { 
            ...m, 
            isEditing: true, 
            tempSourceField: m.sourceField, 
            tempTargetField: m.targetField 
          }
        : { ...m, isEditing: false }
    ));
  };

  const cancelEdit = (id: string) => {
    setMappings(prev => prev.map(m => 
      m.id === id 
        ? { 
            ...m, 
            isEditing: false, 
            tempSourceField: undefined, 
            tempTargetField: undefined 
          }
        : m
    ));
  };

  const saveEdit = async (id: string) => {
    const mapping = mappings.find(m => m.id === id);
    if (!mapping || !mapping.tempSourceField || !mapping.tempTargetField) {
      showSnackbar('Please fill in both fields', 'warning');
      return;
    }

    setSaving(true);
    try {
      const updatedMapping = {
        ...mapping,
        sourceField: mapping.tempSourceField,
        targetField: mapping.tempTargetField
      };

      const response = await fetch('/api/mapping/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMapping),
      });

      if (response.ok) {
        setMappings(prev => prev.map(m => 
          m.id === id 
            ? { 
                ...updatedMapping, 
                isEditing: false, 
                tempSourceField: undefined, 
                tempTargetField: undefined 
              }
            : m
        ));
        showSnackbar('Mapping updated successfully', 'success');
      } else {
        showSnackbar('Failed to update mapping', 'error');
      }
    } catch (error) {
      showSnackbar('Error updating mapping', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleTempFieldChange = (id: string, field: "tempSourceField" | "tempTargetField", value: string) => {
    setMappings(prev => prev.map(m => 
      m.id === id ? { ...m, [field]: value } : m
    ));
  };

  const addMapping = async () => {
    if (!newSourceField.trim() || !newTargetField.trim()) {
      showSnackbar('Please fill in both source and target fields', 'warning');
      return;
    }

    // Check for duplicate mappings
    const isDuplicate = mappings.some(m => 
      m.sourceField === newSourceField.trim() && m.targetField === newTargetField.trim()
    );
    
    if (isDuplicate) {
      showSnackbar('This mapping already exists', 'warning');
      return;
    }

    setSaving(true);
    const newMapping = {
      sourceField: newSourceField.trim(),
      targetField: newTargetField.trim(),
      endpointId: endpointId,
      name: newMappingName.trim() || `${newSourceField} -> ${newTargetField}`,
    };

    try {
      const response = await fetch('/api/mapping?endpointId=' + endpointId, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMapping),
      });

      if (response.ok) {
        const createdMapping = await response.json();
        setMappings(prev => [...prev, createdMapping]);
        setNewSourceField("");
        setNewTargetField("");
        setNewMappingName("");
        showSnackbar('Mapping created successfully', 'success');
      } else {
        showSnackbar('Failed to create mapping', 'error');
      }
    } catch (error) {
      showSnackbar('Error creating mapping', 'error');
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = (id: string) => {
    setDeleteDialog({ open: true, mappingId: id });
  };

  const deleteMapping = async () => {
    if (!deleteDialog.mappingId) return;

    setSaving(true);
    try {
      const response = await fetch('/api/mapping?id=' + deleteDialog.mappingId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setMappings(prev => prev.filter(m => m.id !== deleteDialog.mappingId));
        showSnackbar('Mapping deleted successfully', 'success');
      } else {
        showSnackbar('Failed to delete mapping', 'error');
      }
    } catch (error) {
      showSnackbar('Error deleting mapping', 'error');
    } finally {
      setSaving(false);
      setDeleteDialog({ open: false, mappingId: null });
    }
  };

  if (loading) {
    return (
      <Backdrop open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {/* Left Side - Mappings */}
      <Grid size={{ xs: 12, lg: 8 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Field Mappings
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Configure how data fields are mapped between source and target systems.
          </Typography>
          {mappings.length > 0 && (
            <Chip 
              icon={<InfoIcon />}
              label={`${mappings.length} mapping${mappings.length !== 1 ? 's' : ''} configured`}
              color="primary"
              variant="outlined"
            />
          )}
        </Box>

        {/* Existing Mappings */}
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Current Mappings
          </Typography>
          
          {mappings.length === 0 ? (
            <Alert severity="info">
              No mappings configured yet. Add your first mapping below.
            </Alert>
          ) : (
            <Box sx={{ flexGrow: 1 }}>
              {mappings.map((mapping) => (
                <Card key={mapping.id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid size={{ xs: 12, sm: 4 }}>
                        {mapping.isEditing ? (
                          <Autocomplete
                            freeSolo
                            options={sourceFields}
                            value={mapping.tempSourceField || ''}
                            onInputChange={(_, value) => handleTempFieldChange(mapping.id, "tempSourceField", value || '')}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                label="Source Field"
                                variant="outlined"
                                size="small"
                              />
                            )}
                          />
                        ) : (
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              Source Field
                            </Typography>
                            <Typography variant="body1">
                              {mapping.sourceField}
                            </Typography>
                          </Box>
                        )}
                      </Grid>
                      
                      <Grid size={{ xs: 12, sm: 4 }}>
                        {mapping.isEditing ? (
                          <Autocomplete
                            freeSolo
                            options={targetFields}
                            value={mapping.tempTargetField || ''}
                            onInputChange={(_, value) => handleTempFieldChange(mapping.id, "tempTargetField", value || '')}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                fullWidth
                                label="Target Field"
                                variant="outlined"
                                size="small"
                              />
                            )}
                          />
                        ) : (
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              Target Field
                            </Typography>
                            <Typography variant="body1">
                              {mapping.targetField}
                            </Typography>
                          </Box>
                        )}
                      </Grid>
                      
                      <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                          {mapping.isEditing ? (
                            <>
                              <Tooltip title="Save changes">
                                <IconButton 
                                  color="primary" 
                                  onClick={() => saveEdit(mapping.id)}
                                  disabled={saving}
                                >
                                  <CheckIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Cancel editing">
                                <IconButton 
                                  color="secondary" 
                                  onClick={() => cancelEdit(mapping.id)}
                                  disabled={saving}
                                >
                                  <CancelIcon />
                                </IconButton>
                              </Tooltip>
                            </>
                          ) : (
                            <>
                              <Tooltip title="Edit mapping">
                                <IconButton 
                                  color="primary" 
                                  onClick={() => startEdit(mapping.id)}
                                  disabled={saving}
                                >
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete mapping">
                                <IconButton 
                                  color="error" 
                                  onClick={() => confirmDelete(mapping.id)}
                                  disabled={saving}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                            </>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </Paper>

        {/* Add New Mapping */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Add New Mapping
          </Typography>
          
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Field Naming Convention:</strong> Use dot notation for nested objects (e.g., "car.wheel" for accessing the "wheel" property inside a "car" object).
              Define your JSON structures on the right panel to get field suggestions.
            </Typography>
          </Alert>
          
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Autocomplete
                freeSolo
                options={sourceFields}
                value={newSourceField}
                onInputChange={(_, value) => setNewSourceField(value || '')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Source Field"
                    variant="outlined"
                    placeholder="e.g., user.email or car.wheel"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Autocomplete
                freeSolo
                options={targetFields}
                value={newTargetField}
                onInputChange={(_, value) => setNewTargetField(value || '')}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Target Field"
                    variant="outlined"
                    placeholder="e.g., emailAddress"
                  />
                )}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <TextField
                fullWidth
                label="Mapping Name (Optional)"
                variant="outlined"
                value={newMappingName}
                onChange={(e) => setNewMappingName(e.target.value)}
                placeholder="Auto-generated if empty"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={addMapping}
                disabled={saving || !newSourceField.trim() || !newTargetField.trim()}
              >
                {saving ? 'Adding...' : 'Add Mapping'}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Right Side - JSON Examples */}
      <Grid size={{ xs: 12, lg: 4 }}>
        <Box sx={{ position: 'sticky', top: 20 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CodeIcon />
            JSON Examples
          </Typography>
          
          {/* Source JSON */}
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Source Object
                {sourceFields.length > 0 && (
                  <Chip 
                    label={`${sourceFields.length} fields`} 
                    size="small" 
                    color="primary" 
                    sx={{ ml: 1 }} 
                  />
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                fullWidth
                multiline
                rows={8}
                variant="outlined"
                value={sourceJsonText}
                onChange={(e) => {
                  setSourceJsonText(e.target.value);
                  validateAndParseJson(e.target.value, true);
                }}
                placeholder={`{
  "user": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "profile": {
      "age": 30,
      "city": "Amsterdam"
    }
  },
  "timestamp": "2024-01-01T00:00:00Z"
}`}
                error={!sourceJsonValid}
                helperText={!sourceJsonValid ? 'Invalid JSON format' : `${sourceFields.length} fields detected`}
                sx={{ 
                  mb: 2,
                  '& .MuiInputBase-input': { 
                    fontFamily: 'monospace',
                    fontSize: '0.875rem'
                  }
                }}
              />
              
              {sourceFields.length > 0 && (
                <Box>
                  <Typography variant="caption" color="text.secondary" gutterBottom>
                    Available Fields:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {sourceFields.map(field => (
                      <Chip
                        key={field}
                        label={field}
                        size="small"
                        variant="outlined"
                        onClick={() => setNewSourceField(field)}
                        sx={{ cursor: 'pointer' }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>

          {/* Target JSON */}
          <Accordion defaultExpanded sx={{ mt: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Target Object
                {targetFields.length > 0 && (
                  <Chip 
                    label={`${targetFields.length} fields`} 
                    size="small" 
                    color="secondary" 
                    sx={{ ml: 1 }} 
                  />
                )}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                fullWidth
                multiline
                rows={8}
                variant="outlined"
                value={targetJsonText}
                onChange={(e) => {
                  setTargetJsonText(e.target.value);
                  validateAndParseJson(e.target.value, false);
                }}
                placeholder={`{
  "identifier": "",
  "displayName": "",
  "emailAddress": "",
  "metadata": {
    "created": "",
    "location": ""
  }
}`}
                error={!targetJsonValid}
                helperText={!targetJsonValid ? 'Invalid JSON format' : `${targetFields.length} fields detected`}
                sx={{ 
                  mb: 2,
                  '& .MuiInputBase-input': { 
                    fontFamily: 'monospace',
                    fontSize: '0.875rem'
                  }
                }}
              />
              
              {targetFields.length > 0 && (
                <Box>
                  <Typography variant="caption" color="text.secondary" gutterBottom>
                    Available Fields:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {targetFields.map(field => (
                      <Chip
                        key={field}
                        label={field}
                        size="small"
                        variant="outlined"
                        color="secondary"
                        onClick={() => setNewTargetField(field)}
                        sx={{ cursor: 'pointer' }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </AccordionDetails>
          </Accordion>

          {/* Save Button */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<SaveIcon />}
            onClick={saveJsonObjects}
            disabled={saving || (!sourceJsonValid && sourceJsonText.trim() !== '') || (!targetJsonValid && targetJsonText.trim() !== '')}
            sx={{ mt: 2 }}
          >
            {saving ? 'Saving...' : 'Save Example Objects'}
          </Button>
        </Box>
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, mappingId: null })}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this mapping? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, mappingId: null })}>
            Cancel
          </Button>
          <Button onClick={deleteMapping} color="error" disabled={saving}>
            {saving ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
}