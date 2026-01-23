import React, { useContext, useEffect, useState } from "react";
import RecentOrderLeft from "../Components/recentOrderLeft";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";
import RecentOrderLeftItem from "../Components/RecentOrderLeftItem";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

function Cart() {
  const { cart, setCart } = useContext(UserContext);

  const [product, setProduct] = useState("");
  const [findUser, setFindUser] = useState("");

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
  }, [cart, getUserDetail]);

  

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

  const findProduct = (productId) => {
    const find = findUser?.items?.find((itm) => itm?.productId === productId);
    console.log("find", find);

    return find?.qty;
  };

  const price = (itm) => {
    console.log("itm", itm);

    const qty = findProduct(itm.id);
    console.log("qty", qty);

    const priceOfProduct = itm?.price * qty;
    console.log(priceOfProduct, "priceOfProduct");

    return priceOfProduct;
  };

  return (
    <>
      <Header />
      {/* <RecentOrderLeft
        product={product}
        increment={increment}
        decrement={decrement}
        findUser={findUser}
      /> */}
      <Grid>
        <Stack spacing={3}>
          {product?.length > 0 ? (
            <>
              {product?.map((i) => (
                <RecentOrderLeftItem
                  i={i}
                  increment={increment}
                  decrement={decrement}
                  price={price}
                 
                  findProduct={findProduct}
                />
              ))}
            </>
          ) : (
            "No any selected product"
          )}
        </Stack>
      </Grid>
      <Footer />
    </>
  );
}

export default Cart;
