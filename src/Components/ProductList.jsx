import React, { useContext } from "react";
import { Box } from "@mui/material";

import Grid from "@mui/material/Grid";

import { products } from "../Database/Database";
import { UserContext } from "../UseContext/UseContext";

import SingleProduct from "./SingleProduct";

function ProductList() {
  

  const { setCart, setWishList } = useContext(UserContext);

  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
  let userId = getUserDetail;

  let getWishList = JSON.parse(localStorage.getItem("wishlist")) || [];

  let wishList = getWishList?.find((itm) => itm?.userId == userId);

  const addToCart = (itm) => {
    let productId = itm?.id;

    let getCart = JSON.parse(localStorage.getItem("cart")) || [];

    let Cart = getCart?.find((itm) => itm?.userId == userId);

    if (!Cart) {
      Cart = {
        userId,
        items: [],
      };
      getCart.push(Cart);
    }

    let product = Cart?.items?.find((itm) => itm?.productId == productId);

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
    let productId = itm?.id;

    if (!wishList) {
      wishList = {
        userId,
        items: [],
      };
      getWishList.push(wishList);
    }

    let product = wishList?.items?.find((itm) => itm == productId);

    // if (product) {
    //   setWish(!wish);
    //   return;
    // }

    if (product) {
      wishList.items = wishList?.items?.filter((itm) => itm !== productId);

      setWishList(getWishList);

      localStorage.setItem("wishlist", JSON.stringify(getWishList));

      return;
    }

    wishList?.items?.push(productId);

    setWishList(getWishList);

    localStorage.setItem("wishlist", JSON.stringify(getWishList));
  };

  const wishlist = (productId) => {
    return wishList?.items?.includes(productId);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        sx={{ display: "flex" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((itm) => (
          
               <SingleProduct key={itm.id} itm={itm} addToCart={addToCart} addToWishList={addToWishList}  wishlist={wishlist}/>


        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
