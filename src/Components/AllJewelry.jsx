import React from 'react'
import { Box, Typography, MenuItem, Button } from "@mui/material";

function AllJewelry() {
  return (
    <Box
    sx={{
      height: "17vh",
      backgroundColor: "#f8f7f4",
      padding: "40px 65px",
    }}
  >
    <Typography
      sx={{
        fontSize: "45px",
        color: "#2a2622",
        fontFamily: "serif",
        marginBottom: "10px",
      }}
    >
      All Jewelry
    </Typography>
    <Typography sx={{ fontSize: "18px", color: "#867370" }}>
      12 pieces of exquisite craftsmanship
    </Typography>
  </Box>
  )
}

export default AllJewelry
