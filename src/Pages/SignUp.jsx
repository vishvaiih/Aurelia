import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import SignUpCom from "../Components/SignUpCom";
import SignInCom from "../Components/SignInCom";

function SignUp() {
  const navigation = useNavigate();
  const location = useLocation();

  const signup = location.pathname == "/signup";

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%", }}>
          <img
            src={signup ? "./images/signup.png" : "./images/login.png"}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box sx={{ width: "50%",backgroundColor:"#fbfaf8"}}>
          <Box
            sx={{
              margin: "70px auto 25px",
              heigth: "110vh",
              width: "65%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontFamily: "serif",
                  color: "#2a2629",
                  marginBottom: "9px",
                }}
              >
                {signup ? "Create Account" : "Sign In"}
              </Typography>
              <Typography sx={{ color: "#7e7367", fontWeight: "500" }}>
                {signup
                  ? " Fill in your details to get started"
                  : "Enter your credentials to access your account"}
              </Typography>
            </Box>
          </Box>

          {signup ? <SignUpCom /> : <SignInCom />}

          <Box
            sx={{ display: "flex", margin: "18px", justifyContent: "center" }}
          >
            <Typography sx={{ color: "#867767" }}>
              {signup ? "Already have an account?" : "Don't have an account?"}
            </Typography>
            <Typography
              onClick={() => {
                signup ? navigation("/login") : navigation("/signup");
              }}
              sx={{ color: "#d9a520", fontWeight: "500", cursor: "pointer" }}
            >
              {signup ? " Sign in" : "Create One"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
