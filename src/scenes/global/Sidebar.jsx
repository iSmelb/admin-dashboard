import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation, } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected}) => {
  return (
    <MenuItem 
      active={selected === to}
      onClick={() => setSelected(to)}
      icon={icon}
      component={<Link to={to}/>}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}


const CustomSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { pathname } = useLocation();
  const [selected, setSelected] = useState(pathname);
  const { collapseSidebar, collapsed } = useProSidebar();
  
  return (
    <Box >
      <Sidebar
        backgroundColor={`${colors.primary[400]}`}
        rootStyles={{
          height: "100%",
          border: "none",
        }}
        transitionDuration={150}
      >
        <Menu 
          iconShape="square"
          menuItemStyles={{
            root: {
              padding: "5px 35px 5px 20px",
              color: `${colors.grey[100]}`,
              "&.ps-active": {
                color: "#6870fa",
              }
            },
            button: {
              height: "auto",
              padding: 0,
              "&:hover": {
                color: "#868dfb",
                backgroundColor: "transparent"
              },
            },
            icon: {
              "@keyframes tilt-shaking": {
                "0%": {transform: "rotate(0deg)"},
                "25%": { transform: "rotate(10deg)"},
                "50%": { transform: "rotate(0eg)"},
                "75%": { transform: "rotate(-10deg)"},
                "100%": { transform: "rotate(0deg)"},
              },
              "&.ps-active": {
                animation: "tilt-shaking 0.3s forwards linear",
              }
            }
          }}
        >
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed && <MenuOutlinedIcon/>}
            rootStyles={{
              margin: "10px 0 20px 0",
              paddingRight: !collapsed && "12px",
            }}
          >
            {!collapsed && ( 
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.jpeg`}
                  style={{borderRadius: "50%"}}
                />
              </Box>

              <Box textAlign="center">
                <Typography variant="h2"
                  color={colors.grey[100]}
                  sx={{mt: "10px"}}
                  fontWeight="bold"
                >
                  Ihor Prylepskyi
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>Vp Fancy Admin</Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={!collapsed && "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m: "15px 0 5px 20px"}}  
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m: "15px 0 5px 20px"}}  
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m: "15px 0 5px 20px"}}  
            >
              Data
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
      
    </Box>
  )
}

export default CustomSidebar;