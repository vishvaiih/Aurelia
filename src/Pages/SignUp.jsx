import { Box, Typography } from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';


function SignUp() {
  return (
    <>
      <Box sx={{ border: "2px solid black", display: "flex" }}>
        <Box sx={{ width: "50%" }}>
          <img src="./images/signup.png" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              border: "2px solid black",
              margin: "75px auto 32px",
              heigth: "auto",
              width: "65%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  color: "#2a2629",
                  marginBottom: "9px",
                }}
              >
                Create Account
              </Typography>
              <Typography sx={{ color: "#a6a096", fontWeight: "500" }}>
                Fill in your details to get started
              </Typography>
            </Box>

          </Box>

          <Box sx={{
              border: "2px solid black",
              margin: "0px auto ",
              heigth: "auto",
              width: "65%",
              display:"flex"
            }}>
                
                <Box sx={{marginRight:"15px"}}> 
                      
                <Typography sx={{fontSize:"14px",color:"#45413e",fontWeight:"500"}}>First Name</Typography>
              <TextField
               
                label="First Name"
                type="text"
                autoComplete="current-password"
                sx={{
                    "& .MuiInputBase-input": {
                      height: '46px', 
                      paddingTop: '0px',
                      paddingBottom: '0px', 
                      
                    },
                  }}
              />

                </Box>

                <Box>
                <Typography sx={{fontSize:"14px",color:"#45413e",fontWeight:"500"}}>First Name</Typography>
              <TextField
               
                label="First Name"
                type="text"
                autoComplete="current-password"
                sx={{
                    "& .MuiInputBase-input": {
                      height: '46px', 
                      paddingTop: '0px',
                      paddingBottom: '0px', 
                      
                    },
                  }}
                  />

                </Box>
                

           
              
           
             
            </Box>

          <Box>
            
            </Box>  

        </Box>
      </Box>
    </>
  );
}

export default SignUp;
