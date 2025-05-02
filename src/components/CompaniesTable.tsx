import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { prisma } from "@/app/prisma";
import { act } from "react";
import Button from "@mui/material/Button";
import { redirect } from "next/navigation";

type CompaniesTableProps = {
  companies: { id: string; name: string }[]; // Define the type for companies
};

export default function CompaniesTable({ companies }: CompaniesTableProps) {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>, row: { id: string; company: string }) => {
    e.stopPropagation();
    redirect(`/companies/${row.id}`); // Redirect to the company details page
    //do whatever you want with the row
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "company", headerName: "Company", width: 130 },
    { field: "actions", headerName: "Actions", width: 130, renderCell: (params) => {
      return (
        <Button
          onClick={(e) => onButtonClick(e, params.row)}
          variant="contained"
        >
          View
        </Button>
      );
    }},
  ];

  const rows = companies.map((company) => ({
    id: company.id,
    company: company.name,
  }));

  // Set the initial state for pagination
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}