import { Box, IconButton, Typography, useTheme} from "@mui/material";
import { useEffect, useState } from "react";
import { tokens } from "../theme";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"; 

const dateOptions = {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};
const USDate = new Intl.DateTimeFormat("en-US", dateOptions);

const Notifications = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [popup, setPopup] = useState(false)
  const [notifications, setNotifications] = useState([]);
  const spanStyle = {
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: `${colors.redAccent[500]}`,
    borderRadius: '50%',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    pointerEvents: 'none',
    transform: `scale(${activeNotifications() ? 1 : 0})`,
    transition: 'transform 0.2s linear'
  };
  
  useEffect(() => {
    document.addEventListener('add-notification', e => {
      setNotifications(prev => [e.detail, ...prev,]);
    })
  },[]);

  function activeNotifications() {
    return notifications.reduce((acc, item) => {
      if (!item.checked) {
        return acc + 1;
      }
      return acc;
    },0);
  };

  const checkNotification = (index) => {
    const copyNotification = [...notifications];
    copyNotification[index].checked = true;
    setNotifications(copyNotification);
  };

  return (
    <Box position="relative">
      <span style={spanStyle}> 
        {activeNotifications()}
      </span>
      <IconButton onClick={() => setPopup(!popup)}>
        <NotificationsOutlinedIcon />
      </IconButton>
      
      <Box
        width="280px"
        maxHeight="360px"
        position="absolute"
        top="100%"
        right="0"
        border={`1px solid ${colors.blueAccent[400]}`}
        borderRadius="10px"
        overflow="auto"
        padding="4px 0"
        backgroundColor={colors.primary[400]}
        sx={{
          transform: `scale(${popup ? 1 : 0})`,
          transformOrigin: 'right top',
          transition: 'transform 0.2s linear'
        }}
      >
        {notifications.length 
          ? notifications.map((item, i) => 
            <Box 
              key={`${item.createdDate}`}
              margin="4px 8px"
              padding="4px 8px"
              backgroundColor={!item.checked ? colors.grey[900] : ''}
              borderRadius={!item.checked ? '6px' : ''}
              onMouseOver={() => (!item.checked) && checkNotification(i)}
              borderBottom={`2px solid ${colors.grey[900]}`}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography
                variant="h5"
                color={colors.greenAccent[400]}
              >
                {USDate.format(item.createdDate)}
              </Typography>
              <Typography fontSize="12px">{item.text}</Typography>
            </Box>)
          : <Box padding="32px 16px">
              <Typography
                variant="h5"
                color={colors.greenAccent[300]}
                textAlign='center'
              >
                You don't have any notifications
              </Typography>
          </Box> 
        }
      </Box>
    </Box>
  );
}

export default Notifications