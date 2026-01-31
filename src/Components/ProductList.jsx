import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";

import Grid from "@mui/material/Grid";

import SingleProduct from "./SingleProduct";

function ProductList({ products }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        sx={{ display: "flex" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.length > 0 ? (
          products.map((itm) => <SingleProduct key={itm.id} itm={itm} />)
        ) : (
          <Box sx={{display:"flex",justifyContent:"center",width:"100%"}}>
            <Typography sx={{ color: "#7e7367", fontSize: "20px" }}>
             No products match your filters
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
}

export default ProductList;
