import { Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID",},
    { field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "phone",
      headerName: "Phone number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      )
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ]

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoices for Balances"/>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiSvgIcon-root.MuiDataGrid-iconSeparator": {
            color: colors.grey[100]
          },
        }}
      >
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          componentsProps={{
            panel: {
              sx: {
                "& .MuiPaper-root": {
                  background: colors.primary[400],
                },
                "& .MuiSwitch-switchBase": {
                  color: `${colors.greenAccent[200]} !important`
                },
                "& .MuiSwitch-switchBase+.MuiSwitch-track": {
                  backgroundColor: colors.greenAccent[100]
                },
                "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                  backgroundColor: colors.greenAccent[500]
                },
                "& .MuiFormLabel-root": {
                  color: `${colors.grey[100]} !important`
                },
                "& .MuiDataGrid-panelFooter .MuiButtonBase-root": {
                  color: `${colors.grey[100]} !important`
                },
              }
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Invoices