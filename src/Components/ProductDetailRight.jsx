import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Truck, RotateCcw } from "lucide-react";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { UserContext } from "../UseContext/UseContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function ProductDetailRight({ selectedProduct }) {
  const freeShipping = [
    {
      icon: <Truck />,
      title: "Free Shipping",
      description: "Orders over $500",
    },
    {
      icon: <RotateCcw />,
      title: "30-Day Returns",
      description: "Hassle-free",
    },
    {
      icon: <ShieldOutlinedIcon />,
      title: "Certified",
      description: "Authentic materials",
    },
  ];

  
    const { addToCart, addToWishList, wishlist,increment, decrement, productQty,cartProduct } = useContext(UserContext);

    console.log("cartProduct",cartProduct)
    

    // const  filter = cartProduct?.filter((itm) => itm.id == selectedProduct?.id)
    // console.log("filter",filter)

  return (
    <>
      <Box sx={{ minHeight: "90vh", width: "50%" }}>
        <Box
          sx={{
            width: "95%",

            borderBottom: "1px solid #e7e2da",
            minHeight: "78vh",
            margin: "0px auto",
          }}
        >
          <Box sx={{ display: "flex", color: "#7e7367", alignItems: "center" }}>
            <Typography sx={{ textTransform: "capitalize", fontSize: "15px" }}>
              {selectedProduct?.category}
            </Typography>
            <Box
              sx={{
                height: "5px",
                width: "5px",
                borderRadius: "100%",
                backgroundColor: "#7e7367",
                margin: "0% 1%",
              }}
            ></Box>
            <Typography sx={{ textTransform: "capitalize", fontSize: "15px" }}>
              {selectedProduct?.type}
            </Typography>
          </Box>
 
          <Typography
            sx={{
              fontSize: "33px",
              fontFamily: "serif",
              color: "#2a2622",
              letterSpacing: "1%",
            }}
          >
            {selectedProduct?.name}
          </Typography>

          <Box sx={{ display: "flex", margin: "2% 0%" }}>
            <Rating
              name="read-only"
              value={5}
              readOnly
              sx={{
                marginRight: "3%",
                "& .MuiRating-iconFilled": {
                  color: "#d9a521",
                },
              }}
            />

            <Typography sx={{ color: "#7e7367", fontSize: "15px" }}>
              (128 reviews)
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: "30px", color: "#daa520" }}>
              ${selectedProduct?.price}
            </Typography>

            {selectedProduct?.originalPrice && (
              <>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#7e7367",
                    margin: "0% 2%",
                    textDecoration: "line-through",
                  }}
                >
                  ${selectedProduct?.originalPrice}
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "#dc2828",
                    borderRadius: "30px",
                    textTransform: "capitalize",
                    padding: "1px 10px",
                    fontSize: "15px",
                  }}
                >
                  Save $
                  {selectedProduct?.originalPrice - selectedProduct?.price}
                </Button>
              </>
            )}
          </Box>

          <Typography sx={{ color: "#7e7367", margin: "3% 0%" }}>
            {selectedProduct?.description}
          </Typography>

          <Box
            sx={{
              height: "12vh",
              backgroundColor: "#f6f5f2",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "50%", paddingLeft: "10px" }}>
              <Typography sx={{ color: "#897f70" }}>Material</Typography>
              <Typography sx={{ color: "#2a2622" }}>
                {selectedProduct?.material}
              </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography sx={{ color: "#897f70" }}>Weight</Typography>
              <Typography>{selectedProduct?.weight}</Typography>
            </Box>
          </Box>

          <Box sx={{ margin: "5% 0%", display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                border: "1px solid #e7e2da",
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                width: "23%",
                borderRadius: "10px",
                marginRight: "2%",
                padding:" 5px 20px"
              }}
            >
              <Typography  onClick={() => decrement(selectedProduct?.id)} sx={{ fontSize: "20px" }}>-</Typography>
              <Typography sx={{ fontSize: "20px" }}> {productQty(selectedProduct?.id) } </Typography>
              <Typography  onClick={() => increment(selectedProduct?.id)} sx={{ fontSize: "20px" }}>+</Typography>
            </Button>
            <Box sx={{ color: selectedProduct?.inStock ? "#00a63e" : "#dc2828", display: "flex", }}>
            {selectedProduct?.inStock ? <DoneOutlinedIcon /> : <CloseOutlinedIcon/>}
              <Typography>{selectedProduct?.inStock ? "In Stock" : "Out Of Stock"}</Typography>
            </Box>
          </Box>

          <Box>
            <Button
             onClick={() => addToCart(selectedProduct)}
              sx={{
                color: "#2a2622",
                textTransform: "capitalize",
                backgroundColor: "#d8aa33",
                width: "82%",
                height: "9vh",
                borderRadius: "10px",
                marginRight: "3%",
              }}
            >
              <LocalMallOutlinedIcon
                style={{ width: "18px", height: "18px", marginRight: "3%" }}
              />
              <Typography >Add to Cart</Typography>
            </Button>
            <Button
             onClick={() => addToWishList(selectedProduct)}
              sx={{
                border: "1px solid #e1e1df",
                color: "#2a2622",
                
                width: "14%",
                height: "9vh",
                borderRadius: "10px",
              }}
            >
              {wishlist(selectedProduct?.id) ? (
    <FavoriteIcon sx={{ color: "red", fontSize: 18 }} />
  ) : (
    <FavoriteBorderOutlinedIcon sx={{ color: "#2a2622", fontSize: 18 }} />
  )}
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            minHeight: "25vh",
            width: "95%",
            margin: "0px auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          {freeShipping?.map((itm) => (
            <Box sx={{ width: "33%", textAlign: "center" }}>
              <Box style={{ color: "#d9a520" }}>{itm.icon}</Box>

              <Typography sx={{ color: "#2a2622", fontSize: "15px" }}>
                {itm.title}
              </Typography>
              <Typography sx={{ color: "#8a8075", fontSize: "13px" }}>
                {itm.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ProductDetailRight;
