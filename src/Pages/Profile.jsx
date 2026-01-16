import React from "react";
import Header from "../Components/Header";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";


import QuickAction from "../Components/QuickAction";
import RecentOrders from "../Components/RecentOrders";
import Footer from "../Components/Footer";





function Profile() {
  return (
    <>
      <Header />
      <Box
        sx={{
          height: "28vh",
          width: "100%",
          backgroundColor: "#f8f7f4",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            margin: "0% 2% 0% 5%",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#d9a520",
              border: "4px solid #f1e7c9",
              width: 70,
              height: 70,
            }}
          >
            N
          </Avatar>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "27px", fontFamily: "serif" }}>
            vishva bhensadadiya
          </Typography>
          <Typography sx={{ color: "#867b6b" }}>vishva@gmail.com</Typography>
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "#fbfaf8", minHeight: "100vh", padding: "1px" }}
      >  
      <QuickAction/>

      <RecentOrders/>
      </Box>

      <Footer/>


     

      
    </>
  );
}

export default Profile;
