import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
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
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({row: {access}}) => 
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === "admin"
              ? colors.greenAccent[600]
              : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlined/>}
          {access === "manager" && <SecurityOutlined/>}
          {access === "user" && <LockOpenOutlined/>}
          <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
            {access}
          </Typography>
        </Box>
    },
  ]

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members"/>
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
          }
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
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

export default Team