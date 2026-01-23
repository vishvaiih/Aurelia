import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import RecentOrderLeft from "./recentOrderLeft";

function RecentOrders() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "3% 5%", minHeight: "30vh" }}>
        <Grid container spacing={2}>
          <RecentOrderLeft />

          <Grid size={4}>
            <Stack spacing={3}>
              <Item
                sx={{
                  borderRadius: "15px",
                  minHeight: "20vh",
                  backgroundColor: "#f8f3e8",
                }}
              >
                <Typography
                  sx={{
                    color: "#453628",
                    fontFamily: "serif",
                    fontSize: "17px",
                  }}
                >
                  VIP member
                </Typography>
                <Typography
                  sx={{
                    color: "#867b6b",
                    margin: "13px 0px",
                    fontSize: "15px",
                  }}
                >
                  You've earned 2,450 points. Just 550 more to reach Platinum
                  status!
                </Typography>
                <Box
                  sx={{
                    height: "8px",
                    width: "90%",
                    backgroundColor: "#d9a520",
                    borderRadius: "10px",
                  }}
                ></Box>
                <Typography
                  sx={{ color: "#8a7b6f", fontSize: "13px", marginTop: "10px" }}
                >
                  2,450/3,000 points
                </Typography>
              </Item>
              <Item sx={{ borderRadius: "15px", minHeight: "17vh" }}>
                <Typography
                  sx={{
                    color: "#453628",
                    fontFamily: "serif",
                    fontSize: "15px",
                  }}
                >
                  Need Help?
                </Typography>
                <Typography
                  sx={{
                    color: "#867b6b",
                    margin: "13px 0px",
                    fontSize: "15px",
                  }}
                >
                  Our customer service team is here for you.
                </Typography>
                <Button
                  sx={{
                    color: "#2a2936",
                    fontSize: "15px",
                    textTransform: "capitalize",
                    border: "1px solid #e3e3e1",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  Contact Support
                </Button>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default RecentOrders;
