import { Box, useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID"},
    { field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left"
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ]

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference"/>
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
          "& .MuiCheckbox-root": {
            color: colors.greenAccent[200],
          },
          "& .MuiCheckbox-root.Mui-checked": {
            color: colors.greenAccent[200],
          },
          "& .MuiSvgIcon-root.MuiDataGrid-iconSeparator": {
            color: colors.grey[100]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-root": {
            color: colors.grey[100]
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar}}
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

export default Contacts