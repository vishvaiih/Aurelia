import { Box, Typography, MenuItem, Button } from "@mui/material";
import React, { useContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ArrowLeft } from "lucide-react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../UseContext/UseContext";

function EditProfile() {
  const navigation = useNavigate();
  const { data, setData } = useContext(UserContext);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
  ];

  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
  let getData = JSON.parse(localStorage.getItem("data"));

  let filteredData = getData?.find((itm) => itm.id == getUserDetail);

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
    number: yup
      .string("Enter your number")
      .required("Phone number is required")
      .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
    Address: yup
      .string("Enter your Address")
      .required("Address is required")
      .matches(/^\d+\s+[A-Za-z\s]+$/, "Format must be like: 123 Luxury Lane"),
    city: yup.string("Enter your city").required("city is required"),
  // country: yup.string("Enter your country").required("country is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: getUserDetail,
      firstname: filteredData.firstname,
      lastname: filteredData.lastname,
      email: filteredData.email,
      number: "",
      Address: "",
      city: "",
      country: "United States",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
          
      let UpdatedData = getData?.map((itm) => itm.id === getUserDetail ?{ ...itm, ...values } : itm)
      console.log("UpdatedData",UpdatedData);

      localStorage.setItem("data",JSON.stringify(UpdatedData))

      setData(UpdatedData)

      navigation(-1)
     
    },
  });

  

  return (
    <>
      <>
        <Header />
        <Box
          sx={{
            minHeight: "800px",
            padding: "50px 340px",
            backgroundColor: "#fbfaf8",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center",cursor:"pointer"  }}
            onClick={() => navigation(-1)}
          >
            <ArrowLeft
              style={{ color: "#a6a096", marginRight: "10px" }}
              size={17}
            />
            <Typography sx={{ color: "#a6a096"}}>Back to Profile</Typography>
          </Box>

          <Typography
            sx={{
              margin: "36px 0px",
              fontSize: "28px",
              fontFamily: "serif",
              color: "#000020",
            }}
          >
            Edit Profile
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "30px" }}
          >
            <Box
              sx={{
                display: "flex",

                marginRight: "3%",
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "#d9a520",
                  border: "4px solid #f1e7c9",
                  width: 90,
                  height: 90,
                  fontFamily: "serif",
                  fontSize: "25px",
                }}
              >
                {filteredData.firstname.charAt(0) +
                  filteredData.lastname.charAt(0)}
              </Avatar>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "18px", color: "#2a2622" }}>
                Profile Photo
              </Typography>
              <Typography sx={{ color: "#867b6b", fontSize: "15px" }}>
                Click the camera icon to upload a new photo
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              border: "1px solid #e7e2da",
              minHeight: "42vh",
              borderRadius: "15px",
              backgroundColor: "#fdfdfb",
              padding: "23px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "serif",
                color: "#2a2653",
                letterSpacing: "1px",
              }}
            >
              Personal Information
            </Typography>

            <Box sx={{ display: "flex", marginTop: "25px" }}>
              <Box sx={{ marginRight: "20px" }}>
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
                    width: "300px",
                    "& .MuiInputBase-input": {
                      height: "46px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      boxShadow: "0px 0px 4px 0px #e0dbd1",
                    },
                  }}
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname
                  }
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
                    width: "300px",
                    "& .MuiInputBase-input": {
                      height: "46px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      boxShadow: "0px 0px 4px 0px #e0dbd1",
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
                marginTop: "25px",
                heigth: "auto",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
              >
                Email Address
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
                    boxShadow: "0px 0px 4px 0px #e0dbd1",
                  },
                }}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box
              sx={{
                marginTop: "25px",
                heigth: "auto",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
              >
                Phone Number
              </Typography>
              <TextField
                color="warning"
                fullWidth
                placeholder="Number"
                name="number"
                type="number"
                sx={{
                  "& .MuiInputBase-input": {
                    height: "46px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    boxShadow: "0px 0px 4px 0px #e0dbd1",
                  },
                }}
                value={formik.values.number}
                onChange={(e) => {
                  if(e.target.value >= 0) {
                    formik.handleChange(e)
                  }
                }}
                
                onBlur={formik.handleBlur}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </Box>

          </Box>

          <Box
            sx={{
              border: "1px solid #e7e2da",
              minHeight: "30vh",
              borderRadius: "15px",
              backgroundColor: "#fdfdfb",
              padding: "23px",
              marginTop: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "serif",
                color: "#2a2653",
                letterSpacing: "1px",
              }}
            >
              Shipping Address
            </Typography>

            <Box
              sx={{
                marginTop: "25px",
                heigth: "auto",
              }}
            >
              <Typography
                sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
              >
                Street Address
              </Typography>
              <TextField
                color="warning"
                fullWidth
                placeholder="123 Luxury Lane "
                name="Address"
                type="text"
                sx={{
                  "& .MuiInputBase-input": {
                    height: "46px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    boxShadow: "0px 0px 4px 0px #e0dbd1",
                  },
                }}
                value={formik.values.Address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Address && Boolean(formik.errors.Address)}
                helperText={formik.touched.Address && formik.errors.Address}
              />
            </Box>

            <Box sx={{ display: "flex", marginTop: "25px" }}>
              <Box sx={{ marginRight: "20px" }}>
                <Typography
                  sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
                >
                  City
                </Typography>
                <TextField
                  color="warning"
                  placeholder="Beverly Hills, CA 90210"
                  name="city"
                  type="text"
                  sx={{
                    width: "300px",
                    "& .MuiInputBase-input": {
                      height: "46px",
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      boxShadow: "0px 0px 4px 0px #e0dbd1",
                    },
                  }}
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Box>

              <Box>
                <Typography
                  sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
                >
                  Country
                </Typography>

                <TextField
                  select
                  color="warning"
                  name="country"
                  defaultValue="United States"
                  sx={{
                    width: "300px",
                    "& .MuiInputBase-root": {
                      height: "46px",
                      boxShadow: "0px 0px 4px 0px #e0dbd1",
                    },
                    "& .MuiInputBase-input": {
                      height: "46px",
                      padding: "0 14px",
                      display: "flex",
                      alignItems: "center",
                      // color: "#d2d2d0",
                    },
                  }}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                >
                  {countries.map((country) => (
                    <MenuItem
                      key={country}
                      value={country}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#456882",
                          borderRadius: "10px",
                          margin: " 0px 5px",
                          color: "white",
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#456882 !important",
                          borderRadius: "10px",
                          margin: " 0px 5px",
                          color: "white",
                        },
                      }}
                    >
                      {country}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
             onClick={() => navigation(-1)}
              sx={{
                border: "1px solid #e1e1df",
                color: "#2a2d2f",
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "5px 14px",
                borderRadius: "10px",
                marginRight: "16px",
              }}
            >
              cancel
            </Button>
            <Button
              onClick={formik.handleSubmit}
              sx={{
                border: "1px solid #b68a1b",
                color: "#2a2d2f",
                fontSize: "15px",
                textTransform: "capitalize",
                padding: "5px 14px",
                borderRadius: "10px",
                backgroundColor: "#d7b252",
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
        <Footer />
      </>
    </>
  );
}

export default EditProfile;
