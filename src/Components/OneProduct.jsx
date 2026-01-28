import React, { useEffect } from 'react'
import { Box, Typography, Button } from "@mui/material";
import { ShoppingBag } from "lucide-react";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from 'react-router-dom';


function OneProduct({selectedProduct}) {
    const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

    const navigation = useNavigate();

    useEffect(() => {
        
    })
  return (
   <>
      <Box sx={{ minHeight: "50vh", width: "24%", marginTop: "10px" }}>
      <Box sx={{ position: "relative" }}>
        <img
          src=""
          style={{
            height: "42vh",
            borderRadius: "15px",
            width: "100%",
            objectFit: "cover",
          }}
        />

        {/* Button on Image */}
        <Button
        //   onClick={() => addToCart(itm)}
          variant="contained"
          sx={{
            width: "70%",
            height: "5vh",
            position: "absolute",
            bottom: "10px",
            left: "10px",
            backgroundColor: "white",
            color: "black",
            fontSize: "12px",
            padding: "6px 12px",
            borderRadius: "10px",
            textTransform: "capitalize",
          }}
        >
          <ShoppingBag size={15} style={{ marginRight: "10px" }} />
          Add to Cart
        </Button>
        <Button
        //   onClick={() => addToWishList(itm)}
          variant="contained"
          sx={{
            width: "20%",
            height: "5vh",
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "white",
            color: "black",
            fontSize: "12px",
            borderRadius: "10px",
          }}
        >
          <Checkbox
            {...label}
            // checked={wishlist(itm.id)}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        </Button>
      </Box>

      <Box onClick={() => navigation(`/shop/${itm.id}`)}>
        <Box
          sx={{
            display: "flex",
            margin: "13px 0px 10px",
            color: "#9e968c",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography sx={{ fontSize: "12px", textTransform: "uppercase" }}>
           fgnhgn
          </Typography>
          <Box
            sx={{
              height: "5px",
              width: "5px",
              backgroundColor: "#9e968c",
              borderRadius: "100%",
              margin: "0px 5px",
              cursor: "pointer",
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: "12px",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
           gnhgvn
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#423e3a",
            fontFamily: "serif",
            fontSize: "17px",
            cursor: "pointer",
          }}
        >
        fghnghm
        </Typography>

        <Typography
          sx={{
            color: "#d9a521",
            marginTop: "10px",
            fontWeight: "600",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
         fghmnghm
        </Typography>
      </Box>
    </Box>
   
   
   </>
  )
}

export default OneProduct
