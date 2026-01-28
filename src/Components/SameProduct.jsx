import { Box, Typography } from "@mui/material";
import React,{useState,useEffect} from "react";
import OneProduct from "./OneProduct";
import Grid from "@mui/material/Grid";
import { products } from "../Database/Database";

function SameProduct({ selectedProduct }) {
  const [categoryProduct, setCategoryProduct] = useState([]);

  

  useEffect(() => {
    const categoryViseProducts = products?.filter(
      (itm) => itm.category == selectedProduct?.category && itm.id !== selectedProduct?.id
    );
    setCategoryProduct(categoryViseProducts);
  }, [selectedProduct]);

  console.log("categoryProduct",categoryProduct)

  return (
    <>
      <Box sx={{ marginTop: "6%" }}>
        <Typography sx={{ fontSize: "30px", fontFamily: "serif" }}>
          You May Also Like
        </Typography>

        <Grid
          sx={{ display: "flex", margin: "2% 0%" }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >  

        {categoryProduct?.map((itm) => 
                <OneProduct key={itm.id} itm={itm} />
        )}
         
        </Grid>
      </Box>
    </>
  );
}

export default SameProduct;
