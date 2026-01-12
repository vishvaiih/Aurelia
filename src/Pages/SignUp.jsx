import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";

function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ display: "flex", height: "auto" }}>
        <Box sx={{ width: "50%", height: "700px" }}>
          <img
            src="./images/signup.png"
            style={{ width: "100%", height: "700px" }}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
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
                label="First Name"
                type="text"
                sx={{
                  "& .MuiInputBase-input": {
                    height: "46px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: "14px", color: "#45413e", fontWeight: "500" }}
              >
                First Name
              </Typography>
              <TextField
                label="Last Name"
                type="text"
                sx={{
                  "& .MuiInputBase-input": {
                    height: "46px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                  },
                }}
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
            fullWidth
              label="Email"
              type="text"
              sx={{
                "& .MuiInputBase-input": {
                  height: "46px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                 
                },
              }}
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
            <OutlinedInput
            fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  height: "46px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                },
              }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
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
              }
              label="Password"
            />
          </Box>

          {/* <Box
            sx={{
              margin: "8px auto  0px",
              heigth: "auto",
              width: "65%",
            }}
          >
            <Box sx={{height:"10px", width:"10px",backgroundColor:"#f3f1ed",borderRadius:"100%"}}></Box>

            <Typography sx={{ fontSize: "13px", color: "#92958d" }}>
              At least 8 characters.
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#92958d" }}>
              Contains upperCase letter
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#92958d" }}>
              Contains number
            </Typography>
          </Box> */}

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
            fullWidth
              label="Email"
              type="text"
              sx={{
                "& .MuiInputBase-input": {
                  height: "46px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  width: "100%",
                },
              }}
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
              {...label}
              sx={{
                color: orange[300],
                "&.Mui-checked": {
                  color: orange[200],
                },
              }}
            />
            <Typography sx={{ fontSize: "15px", color: "#2a2622" }}>
              I agree to the
              <span style={{ color: "#d9a527" }}>Terms of Service</span> and
              <span style={{ color: "#d9a527" }}>Privacy Policy</span>
            </Typography>
          </Box>

        
        <Box sx={{display:"flex",justifyContent:"center"}}> 

        <Button
              sx={{
                fontSize: "13px",
                color: "#2a2622",
                textTransform: "lowercase",
                border: "1px solid #b68a1b",
                backgroundColor: "#d9a930",
                width: "65%",
                height: "46px",
                margin:"10px"
                
              }}
            >
              Create Account
            </Button>
        </Box>
        
        <Box sx={{display:"flex",margin:"18px",justifyContent:"center"}}>
            <Typography sx={{color:"#867767"}}> Already have an account?</Typography>
            <Typography>Sign in</Typography>
           
        </Box>
           
          
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
