import { Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"; 
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"; 
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"; 
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"; 
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"; 
import SearchIcon from "@mui/icons-material/Search"; 
import Notifications from "../../components/Notifications";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  
  return (
    <Box 
      className="topbar"
      display="flex"
      justifyContent="space-between" p={2}
      position="sticky"
      left="0"
      top="0"
      zIndex="10"
      backgroundColor={theme.palette.background.default}
    >
      {/* SEARCH */}
      <Box 
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"/>
        <IconButton type="button" sx={{ p: 1}}>
          <SearchIcon/>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light'
            ? <LightModeOutlinedIcon/>
            : <DarkModeOutlinedIcon/>
          }
        </IconButton>
        <Notifications/>
        <IconButton disabled>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton disabled>
          <PersonOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar;