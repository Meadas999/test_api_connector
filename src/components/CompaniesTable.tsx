import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { redirect } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

type CompaniesTableProps = {
  companies: { id: string; name: string }[];
  onDelete: (id: string) => void;
};

export default function CompaniesTable({ companies, onDelete }: CompaniesTableProps) {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, row: { id: string; company: string }) => {
    e.stopPropagation();
    redirect(`/companies/${row.id}`);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "company", headerName: "Company", flex: 1, minWidth: 200 }, // Use flex for responsive width
    { 
      field: "actions", 
      headerName: "Actions", 
      width: 160, 
      renderCell: (params) => {
        return (
          <>
            <Button
              onClick={() => redirect(`/companies/${params.row.id}`)}
              variant="contained"
              size="small"
              sx={{ marginRight: 1 }}
            >
              View
            </Button>
            
            <IconButton 
              aria-label="delete" 
              onClick={() => onDelete(params.row.id)}
              size="small"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </>
        );
      }
    },
  ];

  const rows = companies.map((company) => ({
    id: company.id,
    company: company.name,
  }));

  const paginationModel = { page: 0, pageSize: 15 }; // Increased page size

  return (
    <Paper sx={{ height: '70vh', width: "100%" }}> {/* Use viewport height */}
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 15, 25, 50]}
        sx={{ border: 0 }}
        autoHeight={false} // Disable auto height to use fixed height
      />
    </Paper>
  );
}