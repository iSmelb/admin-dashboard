import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Controller, useForm } from "react-hook-form";
import { tokens } from "../../theme";

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const phonePattern = /^\+?3?8?(0[5-9][0-9]\d{7})$/;

const InputItem = ({config}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Controller
      name={config.name} 
      control={config.control}
      rules={config.rules}
      render={({field: {onChange, onBlur, value,}}) => ( 
        <TextField
          fullWidth
          variant="outlined"
          type={config.type}
          label={config.label}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          error={!!config.error}
          helperText={config.errorMessage}
          sx={{
            gridColumn: config.size,
            '& .MuiOutlinedInput-root': {
              background: colors.primary[400], 
              '&:hover fieldset': {
                borderColor: colors.blueAccent[400],
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.blueAccent[400]
              },
              "&.Mui-error:hover fieldset": {
                borderColor: colors.redAccent[400]
              },
              '&.Mui-focused.Mui-error fieldset': {
                borderColor: colors.redAccent[400]
              }
            },
            '& .MuiFormLabel-root': {
                "&.Mui-focused:not(.Mui-error)": {
                  color: colors.grey[100]
                },
              }
          }}
        />
      )} 
    />
  )
}

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({ 
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    }
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    // reset();
  }

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile"/>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box 
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
          }}
        >
          <InputItem config={{
            name: "firstName",
            control: control,
            rules: {
              required: "This field is required",
            },
            type: "text",
            label: "First Name",
            size: "span 2",
            error: errors.firstName,
            errorMessage: errors?.firstName?.message
          }}/>
          <InputItem config={{
            name: "lastName",
            control: control,
            rules: {
              required: "This field is required",
            },
            type: "text",
            label: "Last Name",
            size: "span 2",
            error: errors.lastName,
            errorMessage: errors?.lastName?.message
          }}/>
          <InputItem config={{
            name: "email",
            control: control,
            rules: {
              required: "This field is required",
              pattern: {
                value: emailPattern,
                message: 'Invalid email address'
              }
            },
            type: "text",
            label: "Email",
            size: "span 4",
            error: errors.email,
            errorMessage: errors?.email?.message
          }}/>
          <InputItem config={{
            name: "contact",
            control: control,
            rules: {
              required: "This field is required",
              pattern: {
                value: phonePattern,
                message: 'Phone is invalid'
              }
            },
            type: "tel",
            label: "Contact",
            size: "span 4",
            error: errors.contact,
            errorMessage: errors?.contact?.message
          }}/>
          <InputItem config={{
            name: "address1",
            control: control,
            rules: {
              required: "This field is required",
            },
            type: "text",
            label: "Address 1",
            size: "span 4",
            error: errors.address1,
            errorMessage: errors?.address1?.message
          }}/>
          <InputItem config={{
            name: "address2",
            control: control,
            rules: {
              required: "This field is required",
            },
            type: "text",
            label: "Address 2",
            size: "span 4",
            error: errors.address2,
            errorMessage: errors?.address2?.message
          }}/>
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained" sx={{fontWeight: "bold"}}>
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Form