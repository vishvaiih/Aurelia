import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import CategoryItem from "./CategoryItem";
import { categories } from "../Database/Database";

function ShopByCategory() {
  return (
    <>
      <Box sx={{ minHeight: "90vh", backgroundColor: "#fbfaf8" }}>
        <Box
          sx={{
            width: "90%",
            margin: "0px auto",
            minHeight: "90vh",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "serif",
              fontSize: "45px",
              marginTop: "6%",
            }}
          >
            Shop by Category
          </Typography>
          <Typography sx={{ color: "#7e7367", textAlign: "center" }}>
            Explore our curated collections, each crafted with precision and
            passion
          </Typography>

          <Grid
            sx={{ display: "flex", marginTop: "4%" }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {categories?.map((itm) => (
              <CategoryItem itm={itm} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default ShopByCategory;
