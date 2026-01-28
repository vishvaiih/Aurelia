import { Box } from "@mui/material";
import React,{useState} from "react";

function ProductDetailLeft({ selectedProduct }) {
  const [activeImg, setActiveImg] = useState(0);

  const image = [
    {
      image: selectedProduct?.image,
    },
    {
      image: selectedProduct?.image,
    },
    {
      image: selectedProduct?.image,
    },
  ];

  return (
    <>
      <Box sx={{ minHeight: "90vh", width: "50%" }}>
        <img
          src={selectedProduct?.image}
          style={{ width: "95%", height: "90vh", borderRadius: "18px" }}
        ></img>

        <Box
          sx={{
            width: "95%",
            height: "30vh",
            marginTop: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {image?.map((itm,index) => (
            <img
              onClick={() => setActiveImg(index)}
              src={itm?.image}
              style={{
                width: "31%",
                height: "27vh",
                borderRadius: "14px",
                border: activeImg === index ? "2px solid #d9a520" : "2px solid transparent",
              }}
            ></img>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ProductDetailLeft;
