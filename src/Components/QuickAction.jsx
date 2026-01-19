import React from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
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
import { useNavigate } from "react-router-dom";

function QuickAction() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const Items = styled(Paper)(({ theme }) => ({
    backgroundColor: "#f7f6f3",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
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

  const navigation = useNavigate();

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
                <Grid size={{ xs: 4, sm: 6, md: 6 }}>
                  <Items
                    sx={{
                      minHeight: "6vh",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (itm.route) {
                        navigation(itm.route);
                      }
                    }}
                  >
                    <Box sx={{ marginRight: "15px" }}>
                      <Avatar
                        sx={{
                          backgroundColor: "#f4eedd",
                          color: "#d9a520",
                          height: "7vh",
                          width: "7vh",
                        }}
                      >
                        {itm.icon}
                      </Avatar>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#2a2622",
                          fontSize: "17px",
                          fontWeight: "500",
                        }}
                      >
                        {itm.title}
                      </Typography>
                      <Typography sx={{ color: "#827b90", fontSize: "15px" }}>
                        {itm.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "auto",
                      }}
                    >
                      <ChevronRightOutlinedIcon />
                    </Box>
                  </Items>
                </Grid>
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
              <Typography sx={{ marginLeft: "10px", color: "#df2b43" }}>
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
