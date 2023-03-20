import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

      <Accordion defaultExpanded sx={{background: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime quidem, sit tempore odio ea blanditiis temporibus qui possimus
            inventore quis labore consequuntur dolor repudiandae voluptatum placeat veniam ex, sed nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime quidem, sit tempore odio ea blanditiis temporibus qui possimus
            inventore quis labore consequuntur dolor repudiandae voluptatum placeat veniam ex, sed nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime quidem, sit tempore odio ea blanditiis temporibus qui possimus
            inventore quis labore consequuntur dolor repudiandae voluptatum placeat veniam ex, sed nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{background: colors.primary[400]}}>
        <AccordionSummary expandIcon={<ExpandMore/>}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Maxime quidem, sit tempore odio ea blanditiis temporibus qui possimus
            inventore quis labore consequuntur dolor repudiandae voluptatum placeat veniam ex, sed nesciunt?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ