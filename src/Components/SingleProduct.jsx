import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import { ShoppingBag } from "lucide-react";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from 'react-router-dom';

function SingleProduct({itm,addToCart,addToWishList,wishlist}) {
    const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

    const navigation = useNavigate();

  return (
    

    <Box  onClick={() => navigation(`/shop/${itm.id}`)}  sx={{ minHeight: "50vh", width: "23%", marginTop: "10px" }}>
            <Box sx={{ position: "relative" }}>
              <img
                src={itm.image}
                style={{
                  height: "33vh",
                  borderRadius: "15px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Button on Image */}
              <Button
                onClick={() => addToCart(itm)}
                variant="contained"
                sx={{
                  width: "60%",
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
                onClick={() => addToWishList(itm)}
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
                  checked={wishlist(itm.id)}
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

            <Box
              sx={{
                display: "flex",
                margin: "13px 0px 10px",
                color: "#9e968c",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "12px", textTransform: "uppercase" }}>
                {itm.category}
              </Typography>
              <Box
                sx={{
                  height: "5px",
                  width: "5px",
                  backgroundColor: "#9e968c",
                  borderRadius: "100%",
                  margin: "0px 5px",
                }}
              ></Box>
              <Typography sx={{ fontSize: "12px", textTransform: "uppercase" }}>
                {itm.type}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#423e3a",
                fontFamily: "serif",
                fontSize: "17px",
              }}
            >
              {itm.name}
            </Typography>

            <Typography
              sx={{
                color: "#d9a521",
                marginTop: "10px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              ${itm.price}
            </Typography>
          </Box>


  )
}

export default SingleProduct
