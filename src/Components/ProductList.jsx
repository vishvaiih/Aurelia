import React, { useContext, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Heart, ShoppingBag } from "lucide-react";
import { products } from "../Database/Database";
import { UserContext } from "../UseContext/UseContext";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function ProductList() {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const { setCart, setWishList } = useContext(UserContext);

  const [wish, setWish] = useState(false);

  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
  let userId = getUserDetail;

  const addToCart = (itm) => {
    console.log(itm, ".....");

    let productId = itm?.id;

    let getCart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("getCart", getCart);

    let Cart = getCart?.find((itm) => itm?.userId == userId);
    console.log("Cart", Cart);

    if (!Cart) {
      Cart = {
        userId,
        items: [],
      };
      getCart.push(Cart);
    }

    let product = Cart?.items?.find((itm) => itm?.productId == productId);
    console.log("product", product);

    if (product) {
      product.qty += 1;
    } else {
      Cart?.items?.push({
        productId,
        qty: 1,
      });
    }

    setCart(getCart);

    localStorage.setItem("cart", JSON.stringify(getCart));
  };

  const addToWishList = (itm) => {
    console.log("/////", itm);

    let productId = itm?.id;

    let getWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    console.log("getWishList", getWishList);

    let wishList = getWishList?.find((itm) => itm?.userId == userId);
    console.log("wishList", wishList);


    if (!wishList) {
      wishList = {
        userId,
        items: [],
      };
      getWishList.push(wishList);
    }

    let product = wishList?.items?.find((itm) => itm?.productId == productId);
    console.log("product", product);

    if (product) {
      setWish(!wish);
      return;
    }
    


    wishList?.items?.push({ productId });

    setWishList(getWishList);

    localStorage.setItem("wishlist", JSON.stringify(getWishList));
  };

  console.log("..........", wish);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        sx={{ display: "flex" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((itm) => (
          <Box sx={{ minHeight: "50vh", width: "23%", marginTop: "10px" }}>
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
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={{
                    color: "default", 
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
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
