import React, { useContext } from "react";
import RecentOrderLeft from "../Components/recentOrderLeft";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { UserContext } from "../UseContext/UseContext";

import RecentOrderLeftItem from "../Components/RecentOrderLeftItem";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

function Cart() {
  const { cart, setCart, productQty, cartProduct } = useContext(UserContext);

  const location = useLocation();
  const typeCart = location.pathname == "/cart";

  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  const priceOFCartProduct = (itm) => {
    const qty = productQty(itm.id);

    const priceOfProduct = itm?.price * qty;

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
      <Typography
        sx={{ fontSize: "22px", margin: " 10px 55px", fontFamily: "serif" }}
      >
        Cart List
      </Typography>

      <Grid>
        <Stack spacing={3}>
          {cartProduct?.length > 0 ? (
            <>
              {cartProduct?.map((i) => (
                <RecentOrderLeftItem
                  i={i}
                  priceOFCartProduct={priceOFCartProduct}
                  typeCart={typeCart}
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
