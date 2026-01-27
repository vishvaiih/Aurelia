import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { products } from "../Database/Database";

function ProductDetailLeft({ productId }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const findProduct = products?.find((itm) => itm.id == productId);
    console.log("findProduct", findProduct);

    setSelectedProduct(findProduct);
  }, [productId]);

  return (
    <>
      <Box sx={{ border: "2px solid black", minHeight: "90vh", width: "50%" }}>
        <img
          src={selectedProduct?.image}
          style={{ width: "95%", height: "90vh", borderRadius: "18px" }}
        ></img>
        <Box sx={{ border: "2px solid", height: "30vh", marginTop: "15px" }}>
          <img
            src={selectedProduct?.image}
            style={{ width: "30%", height: "27vh", borderRadius: "14px" }}
          ></img>

          <img
            src={selectedProduct?.image}
            style={{ width: "30%", height: "27vh", borderRadius: "14px" }}
          ></img>

          <img
            src={selectedProduct?.image}
            style={{ width: "30%", height: "27vh", borderRadius: "14px" }}
          ></img>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetailLeft;
