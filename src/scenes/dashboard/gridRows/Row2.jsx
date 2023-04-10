import { Box, IconButton, Typography, useTheme } from "@mui/material";
import XLSX from 'sheetjs-style';
import LineChart from "../../../components/LineChart";
import { tokens } from "../../../theme";
import { mockTransactions, mockLineData } from "../../../data/mockData";
import { DownloadOutlined } from "@mui/icons-material";
import { s2ab } from "../../../utils/exelConvertor";

const Row2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const downloadRevenue = () => {
    if (!mockLineData) return;
    const wb = XLSX.utils.book_new();
    wb.Props = {
      Title: 'Revenue Report',
      Subject: 'Revenue Report',
      Author: 'Author',
      CreatedDate: new Date(),
    };
    wb.SheetNames.push('Sheet');
    
    const wsData = [
      [ null ],
    ];

    for (let i = 0; i < mockLineData.length; i++) {
      wsData.push([mockLineData[i].id]);
      mockLineData[i].data.forEach(item => {
        if (!wsData[0].includes(item.x)) {
          wsData[0].push(item.x);
        }
        wsData[i + 1].push(item.y);
      })
    }

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    wb.Sheets.Sheet = ws;
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const a = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    const fileUrl = URL.createObjectURL(a);

    const hiddenElement = document.createElement('a');
    hiddenElement.href = fileUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = `Revenue.xlsx`;
    hiddenElement.click();
  };

  return (
    <>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="700"
              color={colors.greenAccent[500]}
            >
              $59,342,32
            </Typography>
          </Box>

          <Box>
            <IconButton onClick={downloadRevenue}>
              <DownloadOutlined
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[500],
                  zIndex: 5,
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box height="250px" mt="-20px">
          <LineChart isDashboard={true} />
        </Box>
      </Box>
      {/* Transaction */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          color={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              ${transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Row2;
