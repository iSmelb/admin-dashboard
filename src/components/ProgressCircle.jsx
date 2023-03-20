import { Box, CircularProgress, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({size = 40, thickness = 6, progress = 75}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{position: 'relative'}}>
      <CircularProgress
        variant="determinate"
        value={100}
        thickness={thickness}
        sx={{
          color: colors.blueAccent[500],
        }}
        size={size}
      />
      <CircularProgress
        variant="determinate"
        value={progress} 
        thickness={thickness}
        sx={{
          color: colors.greenAccent[500],
          position: 'absolute',
          left: 0,
          top: 0
        }}
        size={size}
      />
    </Box>
  )
}

export default ProgressCircle