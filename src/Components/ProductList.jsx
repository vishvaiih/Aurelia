import React, { useContext } from "react";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";

import { products } from "../Database/Database";


import SingleProduct from "./SingleProduct";

function ProductList({products}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        sx={{ display: "flex" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((itm) => (
          <SingleProduct key={itm.id} itm={itm} />
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
