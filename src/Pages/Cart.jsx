import React, { useContext, useEffect, useState } from "react";
import RecentOrderLeft from "../Components/recentOrderLeft";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";

function Cart() {
  const { cart, setCart } = useContext(UserContext);

  const[product,setProduct] = useState("")
  const[findUser,setFindUser] = useState("")

  console.log("....", cart);
  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  useEffect(() => {
   

    let findUser = cart?.find((itm) => itm.userId == getUserDetail);
    // console.log("findUser", findUser);
  
    let allProductId = findUser?.items?.map((i) => i.productId);
    // console.log("allProductId", allProductId);
  
    const product = products?.filter((i) => allProductId?.includes(i.id));
    // console.log("product", product);
      
    setProduct(product);
    setFindUser(findUser);

  },[cart,getUserDetail])

  console.log("....",product);
  console.log("user",findUser );

  
   

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
