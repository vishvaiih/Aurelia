
import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";

import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UseContext/UseContext";



function SignUpCom() {

     const navigation = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const { data, setData } = useContext(UserContext);
      const [checked, setChecked] = useState(false);
      console.log("checked", checked);
    
      const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
    
      const handleClickShowPassword = () => setShowPassword((show) => !show);
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
      const handleMouseUpPassword = (event) => {
        event.preventDefault();
      };
    
      const validationSchema = yup.object({
        firstname: yup
          .string("Enter your firstname")
          .required("Firstname is required"),
        lastname: yup
          .string("Enter your lastname")
          .required("Lastname is required"),
        email: yup
          .string("Enter your email")
          .email("Enter a valid email")
          .required("Email is required"),
        password: yup
          .string("Enter your password")
          .min(8, "Password should be of minimum 8 characters length")
          .required("Password is required"),
        confirmpassword: yup
          .string("Enter your password")
          .oneOf([yup.ref("password")], "password is not metched")
          .required(" password is required"),
      });
    
      const formik = useFormik({
        initialValues: {
            
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmpassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          if (checked == false) {
            toast.error("Accept terms and condition");
            return;
          }
    
          let data = JSON.parse(localStorage.getItem("data"));
    
          let filterData = data?.find((i) => i?.email == values?.email);
         
    
          if (filterData) {
            toast.error("Email is already exist");
            return;
          }
    
         

          const  newUser = {
            ...values,
            id: Math.random() * Math.pow(5,6)
          }
    
          setData((prev) => [...prev, newUser]);

          toast.success("Sign Up Successfully");

          navigation("/login");
         
        },
      });
    
      useEffect(() => {
        if (data.length > 0) {
          localStorage.setItem("data", JSON.stringify(data));
        }
      }, [data]);


  return (
     <>
                

          <Box
            sx={{
              margin: "0px auto ",
              heigth: "auto",
              width: "65%",
              display: "flex",
            }}
          >
            <Box sx={{ marginRight: "15px" }}>
              <Typography
                sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
              >
                First Name
              </Typography>
              <TextField
               color="warning"
              placeholder="First Name"
                name="firstname"
                type="text"
                sx={{
                  "& .MuiInputBase-input": {
                    height: "46px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                   boxShadow:"0px 0px 4px 0px #e0dbd1"
                  },
                }}
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
              >
                Last Name
              </Typography>
              <TextField
               color="warning"
                placeholder="Last Name"
                name="lastname"
                type="text"
                sx={{
                  "& .MuiInputBase-input": {
                    height: "46px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    boxShadow:"0px 0px 4px 0px #e0dbd1"
                  },
                }}
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Box>
          </Box>

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
              Email
            </Typography>
            <TextField
             color="warning"
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
              margin: "23px auto  0px",
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
             color="warning"
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
              Confirm Password
            </Typography>
            <TextField
             color="warning"
              name="confirmpassword"
              fullWidth
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              sx={{
                "& .MuiInputBase-input": {
                  height: "46px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  width: "100%",
                  boxShadow:"0px 0px 4px 0px #e0dbd1"
                },
              }}
              value={formik.values.confirmpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmpassword &&
                Boolean(formik.errors.confirmpassword)
              }
              helperText={
                formik.touched.confirmpassword && formik.errors.confirmpassword
              }
            />
          </Box>

          <Box
            sx={{
              margin: "10px auto  0px",
              heigth: "auto",
              width: "65%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              onChange={() => setChecked(!checked)}
              {...label}
              sx={{
                color: orange[300],
                "&.Mui-checked": {
                  color: orange[200],
                },
              }}
            />
            <Typography sx={{ fontSize: "15px", color: "#2a2622" }}>
              I agree to the <span style={{ color: "#d9a527" }}>Terms of Service</span> and <span style={{ color: "#d9a527" }}>Privacy Policy</span>
            </Typography>
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
                        Create Account
                      </Button>
                    </Box>
     
     
     </>
  )
}

export default SignUpCom
