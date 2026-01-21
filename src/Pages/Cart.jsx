import React, { useContext, useState } from "react";
import RecentOrderLeft from "../Components/recentOrderLeft";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";

function Cart() {
  const { cart, setCart } = useContext(UserContext);

  console.log("....", cart);
  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  let findUser = cart?.find((itm) => itm.userId == getUserDetail);
  console.log("findUser", findUser);

  let allProduct = findUser?.items?.map((i) => i.productId);
  console.log("allProduct", allProduct);

  const product = products?.filter((i) => allProduct?.includes(i.id));
  console.log("product", product);

  const increment = (productid) => {
    console.log(".....", productid);
    console.log("cart", cart);

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
    console.log(".....", productid);
    console.log("cart", cart);

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

  return (
    <>
      <Header />
      <RecentOrderLeft
        product={product}
        increment={increment}
        decrement={decrement}
        findUser={findUser}
      />
      <Footer />
    </>
  );
}

export default Cart;
