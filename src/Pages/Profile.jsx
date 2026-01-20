import React from "react";
import Header from "../Components/Header";
import { Box } from "@mui/material";

import QuickAction from "../Components/QuickAction";
import RecentOrders from "../Components/RecentOrders";
import Footer from "../Components/Footer";
import User from "../Components/User";

function Profile() {
  return (
    <>
      <Header />

      <User />

      <Box
        sx={{ backgroundColor: "#fbfaf8", minHeight: "100vh", padding: "1px" }}
      >
        <QuickAction />

        <RecentOrders />
      </Box>

      <Footer />
    </>
  );
}

export default Profile;
