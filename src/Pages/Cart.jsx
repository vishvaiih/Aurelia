import React, { useContext, useEffect, useState } from "react";
import RecentOrderLeft from "../Components/recentOrderLeft";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";
import RecentOrderLeftItem from "../Components/RecentOrderLeftItem";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(UserContext);

  const location = useLocation();
  const typeCart = location.pathname == "/cart";

  const [cartProduct, setCartProduct] = useState("");
  const [findUser, setFindUser] = useState("");

  console.log("....", cart);
  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  useEffect(() => {
    let findUser = cart?.find((itm) => itm.userId == getUserDetail);
    // console.log("findUser", findUser);

    let allProductId = findUser?.items?.map((i) => i.productId);
    console.log("allProductId", allProductId);

    const cartProduct = products?.filter((i) => allProductId?.includes(i.id));
    // console.log("product", product);

    setCartProduct(cartProduct);
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

  const productQty = (productId) => {
    const find = findUser?.items?.find((itm) => itm?.productId === productId);
    console.log("find", find);

    return find?.qty;
  };

  const priceOFCartProduct = (itm) => {
    console.log("itm", itm);

    const qty = productQty(itm.id);
    console.log("qty", qty);

    const priceOfProduct = itm?.price * qty;
    console.log(priceOfProduct, "priceOfProduct");

    return priceOfProduct;
  };

  const handleDelete = (id) => {
    const deleteSelectedProduct = cart?.map((itm) =>
      Number(itm.userId) === Number(getUserDetail)
        ? {
            ...itm,
            items: itm?.items?.filter(
              (item) => Number(item.productId) !== Number(id)
            ),
          }
        : itm
    );
    console.log("deleteSelectedProduct", deleteSelectedProduct);

    setCart(deleteSelectedProduct);

    localStorage.setItem("cart", JSON.stringify(deleteSelectedProduct));
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
          {cartProduct?.length > 0 ? (
            <>
              {cartProduct?.map((i) => (
                <RecentOrderLeftItem
                  i={i}
                  incrementAction={increment}
                  decrementAction={decrement}
                  priceOFCartProduct={priceOFCartProduct}
                  typeCart={typeCart}
                  productQty={productQty}
                  deleteAction={handleDelete}
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
