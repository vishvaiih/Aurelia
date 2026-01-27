import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    let getItem = JSON.parse(localStorage.getItem("data")) || [];
    return getItem;
  });

  const [cart, setCart] = useState(() => {
    let getCart = JSON.parse(localStorage.getItem("cart")) || [];
    return getCart;
  });

  const [wishList, setWishList] = useState(() => {
    let getWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    return getWishList;
  });

  

  

  const addToCart = (itm) => {

    let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
   let userId = getUserDetail;

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
    let getWishList = JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishList = getWishList?.find((itm) => itm?.userId == userId);
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
    let getWishList = JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishList = getWishList?.find((itm) => itm?.userId == userId);

    return wishList?.items?.includes(productId);
  };

  return (
    <UserContext.Provider
      value={{ data, setData, cart, setCart, wishList, setWishList ,addToCart,addToWishList,wishlist}}
    >
      {children}
    </UserContext.Provider>
  );
};
