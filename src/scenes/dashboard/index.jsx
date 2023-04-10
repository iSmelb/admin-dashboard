import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import XLSX from 'sheetjs-style';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Row1 from "./gridRows/Row1";
import Row2 from "./gridRows/Row2";
import Row3 from "./gridRows/Row3";
import { s2ab } from "../../utils/exelConvertor";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const downloadReport = () => {
    if (!mockTransactions) return;
    const ws = XLSX.utils.json_to_sheet(mockTransactions);
    const wscols = [
      {},
      {wch: 13},
      {wch: 10}
    ];
    ws['!cols'] = wscols;
    const wb = { Sheets: { 'data': ws}, SheetNames: ['data'] };
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const a = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    const fileUrl = URL.createObjectURL(a);

    const hiddenElement = document.createElement('a');
    hiddenElement.href = fileUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = `Reports.xlsx`;
    hiddenElement.click();
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
        <Box>
          <Button
            sx={{ 
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: colors.blueAccent[600],
              }
            }}
            onClick={downloadReport}
          >
            <DownloadOutlined sx={{mr: "10px"}}/>
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Row1/>
        <Row2/>
        <Row3/>
      </Box>
    </Box>
  )
}

export default Dashboard;