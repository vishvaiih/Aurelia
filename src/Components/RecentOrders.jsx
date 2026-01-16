import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Package} from "lucide-react";

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

  const RecentOrders = [
    {
      title:"Order #123",
      price:"Price",
    },
    {
      title:"Order #123",
      price:"Price",
    },
    {
      title:"Order #123",
      price:"Price",
    },
   

  ]
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "3% 5%", minHeight: "30vh" }}>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Item sx={{ boxSizing: "border-box", borderRadius: "15px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between",marginBottom:"4%" }}>
                <Typography
                  sx={{
                    fontFamily: "serif",
                    fontSize: "18px",
                    color: "#2a3336",
                  }}
                >
                  Recent Orders
                </Typography>
                <Typography sx={{ color: "#dba54a", fontSize: "15px" }}>
                  View All
                </Typography>
              </Box>

              <Grid>
  <Stack spacing={3}>

    {RecentOrders.map((i) =>
          <Item sx={{ minHeight: "5vh", backgroundColor: "#f7f6f3", display: "flex", alignItems: "center" }}>
      
          <Box
            sx={{
              height: "7vh",
              width: "7vh",
              backgroundColor: "#f4eedd",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d9a520",
              mr: 2, 
            }}
          >
            <Package />
          </Box>
    
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",  
            }}
          >
            <Typography sx={{color:"#2a2936",fontWeight:"500"}}>{i.title}</Typography>
            <Typography sx={{color:"#2a2936",fontWeight:"500"}}>{i.price}</Typography>
          </Box>
    
        </Item>
    
    )}
    
  </Stack>
</Grid>

              



            </Item>
          </Grid>

          <Grid size={4}>
            <Stack spacing={2}>
              <Item sx={{ borderRadius: "15px",minHeight:"20vh" ,backgroundColor:"#f8f3e8"}}>
                   <Typography sx={{color:"#453628",fontFamily:"serif",fontSize:"17px"}}>
                      VIP member
                   </Typography>
                   <Typography sx={{color:"#867b6b",marginTop:"13px"}}>You've earned 2,450 points. Just 550 more to reach Platinum status!</Typography>
                   <Box sx={{}}></Box>


              </Item>
              <Item sx={{ borderRadius: "15px",minHeight:"20vh" }}>Column 1 - Row 2</Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default RecentOrders;
