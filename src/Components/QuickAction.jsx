import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Grid from "@mui/material/Grid";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Bell,
  Settings,
} from "lucide-react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import QuickActionData from "./QuickActionData";
import { useNavigate } from "react-router-dom";

function QuickAction() {

  const navigation = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

 
  

  const quickActionData = [
    {
      icon: <User />,
      title: " Edit Profile",
      description: "   Update Your personal information",
      route:"/profile/edit",
    },
    {
      icon: <Package />,
      title: " My Orders",
      description: "Track and view your order",
    },
    {
      icon: <Heart />,
      title: " WishList",
      description: "Items You've saved",
    },
    {
      icon: <MapPin />,
      title: "Addresses",
      description: "Manage shipping addresses",
    },
  ];

  const accountDetail = [
    {
      icon: <CreditCard />,
      title: "Payment Methods",
    },
    {
      icon: <Bell />,
      title: "Notifications",
    },
    {
      icon: <Settings />,
      title: "Settings",
    },
  ];

 

  return (
    <>
      <Grid container spacing={2} sx={{ margin: "4% 5% 0% 5%" }}>
        <Grid size={8}>
          <Item sx={{ minHeight: "30vh", borderRadius: "15px" }}>
            <Typography
              sx={{ fontFamily: "serif", fontSize: "18px", color: "#2a3336" }}
            >
              Quick Actions
            </Typography>

            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ marginTop: "16px" }}
            >
              {quickActionData.map((itm) => (
                
                 <QuickActionData itm={itm} />


              ))}
            </Grid>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item sx={{ minHeight: "30vh", borderRadius: "15px" }}>
            <Typography
              sx={{ fontFamily: "serif", fontSize: "18px", color: "#2a3336" }}
            >
              Account
            </Typography>

            {accountDetail.map((itm) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "22px 0px",
                }}
              >
                <Box sx={{ display: "flex", margin: "0px 10px" }}>
                  {itm.icon}
                  <Typography
                    sx={{
                      marginLeft: "10px",
                      color: "#7c7b76",
                      fontSize: "15px",
                    }}
                  >
                    {itm.title}
                  </Typography>
                </Box>
                <Box>
                  <ChevronRightOutlinedIcon />
                </Box>
              </Box>
            ))}
            <Box sx={{ display: "flex", margin: "0px 10px" }}>
              <LogoutOutlinedIcon sx={{ color: "#df2b43" }} />
              <Typography  onClick = {() => navigation("/login")} sx={{ marginLeft: "10px", color: "#df2b43" }}>
                Sign Out
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default QuickAction;
