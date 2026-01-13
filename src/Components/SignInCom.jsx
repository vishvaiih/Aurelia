import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

function SignInCom() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = yup.object({
         
          email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
          password: yup
            .string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
        });
      
        const formik = useFormik({
          initialValues: {
            email: "",
            password: "",
          },
          validationSchema: validationSchema,
          onSubmit: (values) => {
           console.log("values",values)

           let getItem = JSON.parse(localStorage.getItem("data"))
           console.log("getItem",getItem);

           const filterDataByEmail = getItem?.find((i) => i?.email == values.email)
           console.log("filterDataByEmail",filterDataByEmail);

           if(filterDataByEmail){
             if(filterDataByEmail?.password === values.password){
                localStorage.setItem("userDetail",JSON.stringify(filterDataByEmail?.id))
                toast.success("logIn successfully")
             }else{
                toast.error("password is wrong")
             }
           }else{
             toast.error("user not found")
           }
            
        }});

  return (
    <>
      <Box
        sx={{
          margin: "23px auto  0px",
          heigth: "auto",
          width: "65%",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
        >
          Email Address
        </Typography>
        <TextField
          fullWidth
          placeholder="Email"
          name="email"
          type="text"
          sx={{
            "& .MuiInputBase-input": {
              height: "46px",
              paddingTop: "0px",
              paddingBottom: "0px",
              boxShadow:"0px 0px 4px 0px #e0dbd1"
            },
          }}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
      </Box>

      <Box
        sx={{
          margin: "23px auto  12px",
          heigth: "auto",
          width: "65%",
        }}
      >
        <Typography
          sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
        >
          Password
        </Typography>
        <TextField
          name="password"
          placeholder="Password"
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              height: "46px",
              paddingTop: "0px",
              paddingBottom: "0px",
              boxShadow:"0px 0px 4px 0px #e0dbd1"
            },
          }}
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={formik.handleSubmit}
          sx={{
            fontSize: "16px",
            color: "#2a2622",
            textTransform: "capitalize",
            border: "1px solid #b68a1b",
            backgroundColor: "#d9a930",
            width: "65%",
            height: "46px",
            margin: "10px",
          }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
}

export default SignInCom;
