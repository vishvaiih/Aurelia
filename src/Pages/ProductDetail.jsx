import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Box, Typography } from "@mui/material";
import Footer from "../Components/Footer";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ProductDetailLeft from "../Components/ProductDetailLeft";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../Database/Database";
import ProductDetailRight from "../Components/ProductDetailRight";
import Details from "../Components/Details";

function ProductDetail() {

    const params = useParams();
    const productId = params.id;

    const navigation = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState(null);
    
      useEffect(() => {
        const findProduct = products?.find((itm) => itm.id == productId);
        console.log("findProduct", findProduct);
    
        setSelectedProduct(findProduct);
      }, [productId]);


  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: "#fbfaf8" }}>
        <Box
          sx={{
            width: "90%",
            minHeight: "100vh",
            border: "2px solid black",
            margin: "0% auto",
          }}
        >
          <Box
            onClick = {() => navigation("/shop")}
            sx={{
              display: "flex",
              color: "#7e7367",
              alignItems: "center",
              margin: "25px 0px",
              cursor:"pointer"
            }}
          >
            <ArrowBackOutlinedIcon
              style={{ fontSize: "18px", marginRight: "10px" }}
            />
            <Typography>Back To Shop</Typography>
          </Box>

          <Box sx={{minHeight:"90vh",display:"flex"}}>
                <ProductDetailLeft selectedProduct={selectedProduct} />

                <ProductDetailRight selectedProduct={selectedProduct}/>
                
          </Box>

          <Box>
               <Details/>

          </Box>

        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default ProductDetail;
