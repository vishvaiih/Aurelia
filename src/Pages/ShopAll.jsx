import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box, Typography, MenuItem } from "@mui/material";
import { Funnel } from "lucide-react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { categories, productTypes } from "../Database/Database";

function ShopAll() {
  const option = [
    "Featured",
    "Newest",
    "Price : Low to High",
    "Price : High to Low",
  ];

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <>
      <Header />
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

      <Box
        sx={{
          minHeight: "600px",
          padding: "40px 65px",
          backgroundColor: "#fbfaf8",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", color: "#54514e" }}>
            <Funnel
              style={{ marginRight: "10px", color: "#2a2622" }}
              size={20}
            />
            <Typography sx={{ fontFamily: "serif", fontSize: "15px" }}>
              Filters
            </Typography>
          </Box>

          <Box>
            <Box>
              <TextField
                select
                color="warning"
                name="Filter"
                defaultValue="Featured"
                sx={{
                  width: "180px",

                  "& .MuiInputBase-root": {
                    height: "38px",
                    boxShadow: "0px 0px 4px 0px #e0dbd1",
                    borderRadius: "10px",
                  },
                  "& .MuiInputBase-input": {
                    height: "38px",
                    padding: "0 14px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "10px",
                  },
                }}
              >
                {option.map((itm) => (
                  <MenuItem
                    value={itm}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#456882",
                        borderRadius: "10px",
                        margin: " 0px 5px",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#456882 !important",
                        borderRadius: "10px",
                        margin: " 0px 5px",
                        color: "white",
                      },
                    }}
                  >
                    {itm}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontFamily: "serif" }}>Category</Typography>

          {categories.map((itm) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox {...label} style={{ color: "#d9a520" }} />
              <Typography
                sx={{ color: "#413d39", fontSize: "15px", fontWeight: "500" }}
              >
                {itm.name}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontFamily: "serif" }}>Product Type </Typography>

          {productTypes.map((itm) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox {...label} style={{ color: "#d9a520" }} />
              <Typography
                sx={{ color: "#413d39", fontSize: "15px", fontWeight: "500" }}
              >
                {itm.name}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ marginTop: "10px" }}>
          <Typography sx={{ fontFamily: "serif" }}>Price Range</Typography>

          
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox {...label} style={{ color: "#d9a520" }} />
              <Typography
                sx={{ color: "#413d39", fontSize: "15px", fontWeight: "500" }}
              >
              Under $500
              </Typography>
            </Box>
          
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default ShopAll;
