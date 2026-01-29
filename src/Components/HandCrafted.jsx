import { Box, Typography } from "@mui/material";
import React from "react";
import { Sparkles, Truck } from "lucide-react";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

function HandCrafted() {
  const handCrafted = [
    {
      icon: <Sparkles />,
      title: "Handcrafted",
      Description: "By master artisans",
    },
    {
      icon: <ShieldOutlinedIcon />,
      title: "Certified",
      Description: "Authentic materials",
    },
    {
      icon: <Truck />,
      title: "Free Shipping",
      Description: "Orders over $500",
    },
    {
      icon: <StarBorderOutlinedIcon />,
      title: "5-Star Rated",
      Description: "10,000+ reviews",
    },
  ];
  return (
    <>
      <Box
        sx={{
          padding:"1px",
          height: "20vh",
          backgroundColor: "#f8f7f4",
          display: "flex",
          alignItems: "center",
        }}
      >
        {handCrafted?.map((itm) => (
          <Box
          
            sx={{
              width: "25%",

              height: "20vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                backgroundColor: "#f5efde",
                height: "50px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#d9a520",
                marginRight: "3%",
              }}
            >
              {itm?.icon}
            </Box>
            <Box>
              <Typography sx={{ color: "#2a2936", fontSize: "15px" }}>
                {itm?.title}
              </Typography>
              <Typography sx={{ color: "#897f74", fontSize: "13px" }}>
                {itm?.Description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default HandCrafted;
