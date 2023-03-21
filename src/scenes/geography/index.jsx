import { Box } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart"/>
      <Box height="75vh" border="1px solid #fff" borderRadius="4px">
        <GeographyChart/>
      </Box>
    </Box>
  )
}

export default Geography