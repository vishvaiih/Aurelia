import React from "react";
import Header from "../Components/Header";
import { Box, Typography } from "@mui/material";
import Footer from "../Components/Footer";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ProductDetailLeft from "../Components/ProductDetailLeft";
import { useParams } from "react-router-dom";

function ProductDetail() {

    const params = useParams();
    const productId = params.id;


  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "#fbfaf8" }}>
        <Box
          sx={{
            width: "90%",
            minHeight: "100vh",
            border: "2px solid black",
            margin: "0px auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              color: "#7e7367",
              alignItems: "center",
              margin: "25px 0px",
            }}
          >
            <ArrowBackOutlinedIcon
              style={{ fontSize: "18px", marginRight: "10px" }}
            />
            <Typography>Back To Shop</Typography>
          </Box>

          <Box sx={{minHeight:"90vh"}}>
                <ProductDetailLeft productId={productId}/>


          </Box>

        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default ProductDetail;
