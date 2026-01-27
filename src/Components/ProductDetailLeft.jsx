import { Box } from "@mui/material";
import React  from "react";


function ProductDetailLeft({ selectedProduct }) {
  

  const image = [
    {
        image:selectedProduct?.image,
    },
    {
        image:selectedProduct?.image,
    },
    {
        image:selectedProduct?.image,
    },
    
  ]

  return (
    <>
      <Box sx={{ minHeight: "90vh", width: "50%" ,border: "2px solid"}}>
        <img
          src={selectedProduct?.image}
          style={{ width: "95%", height: "90vh", borderRadius: "18px" }}
        ></img>

        <Box sx={{ border: "2px solid",  width: "95%",height: "30vh", marginTop: "15px" ,display:"flex",justifyContent:"space-between"}}>
         

          {image?.map((itm) =>
                 <img
                 src={itm?.image}
                 style={{ width: "31%", height: "27vh", borderRadius: "14px" }}
               ></img>
        )}

        </Box>
      </Box>
    </>
  );
}

export default ProductDetailLeft;
