import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box, Typography, MenuItem, Button } from "@mui/material";
import { Funnel } from "lucide-react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { categories, products, productTypes } from "../Database/Database";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

function ShopAll() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const option = [
    "Featured",
    "Newest",
    "Price : Low to High",
    "Price : High to Low",
  ];

  const priceRange = [
    " Under $500",
    "$500 - $1,000",
    "$1,000 - $3,000",
    "Over $3,000",
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

        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginRight: "130px" }}>
            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ fontFamily: "serif" }}>Category</Typography>

              {categories.map((itm) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox {...label} style={{ color: "#d9a520" }} />
                  <Typography
                    sx={{
                      color: "#413d39",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {itm.name}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ fontFamily: "serif" }}>
                Product Type{" "}
              </Typography>

              {productTypes.map((itm) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox {...label} style={{ color: "#d9a520" }} />
                  <Typography
                    sx={{
                      color: "#413d39",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {itm.name}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ marginTop: "10px" }}>
              <Typography sx={{ fontFamily: "serif" }}>Price Range</Typography>

              {priceRange.map((itm) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox {...label} style={{ color: "#d9a520" }} />
                  <Typography
                    sx={{
                      color: "#413d39",
                      fontSize: "15px",
                      fontWeight: "500",
                      minWidth: "120px",
                    }}
                  >
                    {itm}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Grid
              sx={{ display: "flex" }}
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {products.map((itm) => (
                <Box
                  sx={{ minHeight: "50vh", width: "23%", marginTop: "10px" }}
                >
                  <Box sx={{ position: "relative" }}>
    <img
      src={itm.image}
      style={{
        height: "33vh",
        borderRadius: "15px",
        width: "100%",
        objectFit: "cover",
      }}
    />

    {/* Button on Image */}
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        backgroundColor: "#d9a521",
        color: "#fff",
        fontSize: "12px",
        padding: "6px 12px",
        borderRadius: "20px",
        "&:hover": {
          backgroundColor: "#c3921c",
        },
      }}
    >
      Add to Cart
    </Button>
  </Box>


                  <Box
                    sx={{
                      display: "flex",
                      margin: "13px 0px 10px",
                      color: "#9e968c",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      {itm.category}
                    </Typography>
                    <Box
                      sx={{
                        height: "5px",
                        width: "5px",
                        backgroundColor: "#9e968c",
                        borderRadius: "100%",
                        margin: "0px 5px",
                      }}
                    ></Box>
                    <Typography
                      sx={{ fontSize: "12px", textTransform: "uppercase" }}
                    >
                      {itm.type}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#423e3a",
                      fontFamily: "serif",
                      fontSize: "17px",
                    }}
                  >
                    {itm.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#d9a521",
                      marginTop: "10px",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    ${itm.price}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default ShopAll;
