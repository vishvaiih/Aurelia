import React, { createContext, useState,useEffect } from "react";
import { products } from "../Database/Database";
import { toast } from "react-toastify";

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

   const [cartProduct, setCartProduct] = useState("");
    const [findUser, setFindUser] = useState("");

    let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
    let userId = getUserDetail;

    useEffect(() => {
        let findUser = cart?.find((itm) => itm.userId == getUserDetail);
    
        let allProductId = findUser?.items?.map((i) => i.productId);
    
        const cartProduct = products?.filter((i) => allProductId?.includes(i.id));
    
        setCartProduct(cartProduct);
        setFindUser(findUser);
      }, [cart, getUserDetail]);


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

    if(product){
      toast.error("Already added product in cart")
      return;
    }

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

    toast.success("Add product in cart successfully")
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

      toast.success("Remove product from wishList successfully")

      return;
    }

    wishList?.items?.push(productId);

    setWishList(getWishList);

    localStorage.setItem("wishlist", JSON.stringify(getWishList));

    toast.success("Add product in wishlist successfully")
  };

  const wishlist = (productId) => {
    
    let getWishList = JSON.parse(localStorage.getItem("wishlist")) || [];

    let wishList = getWishList?.find((itm) => itm?.userId == userId);

    return wishList?.items?.includes(productId);
  };

  const increment = (productid) => {
    let changeQty = cart?.map((itm) =>
      Number(itm.userId) === Number(getUserDetail)
        ? {
            ...itm,
            items: itm?.items?.map((i) =>
              Number(i.productId) === Number(productid)
                ? { ...i, qty: Number(i.qty) + 1 }
                : i
            ),
          }
        : itm
    );

    setCart(changeQty);

    localStorage.setItem("cart", JSON.stringify(changeQty));
  };

  const decrement = (productid) => {
    let changeQty = cart?.map((itm) =>
      Number(itm.userId) === Number(getUserDetail)
        ? {
            ...itm,
            items: itm?.items?.map((i) =>
              Number(i.productId) === Number(productid)
                ? { ...i, qty: i.qty > 1 ? Number(i.qty) - 1 : 1 }
                : i
            ),
          }
        : itm
    );

    setCart(changeQty);

    localStorage.setItem("cart", JSON.stringify(changeQty));
  };

  const productQty = (productId) => {
    const find = findUser?.items?.find((itm) => itm?.productId === productId);

    return find?.qty || 0;
  };

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        wishList,
        setWishList,
        addToCart,
        addToWishList,
        wishlist,
        increment,
        decrement,
        productQty,
        cartProduct,findUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
