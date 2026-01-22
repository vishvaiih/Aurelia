import React, { useContext, useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { useLocation } from "react-router-dom";
import { UserContext } from "../UseContext/UseContext";

function RecentOrderLeft({ product, increment, decrement, findUser }) {
  // console.log("product......",product)
  const location = useLocation();
  const show = location.pathname == "/wishlist";
  const showInCart = location.pathname == "/cart";

  const { cart } = useContext(UserContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  // const RecentOrders = [
  //     {
  //       title: "Order #123",
  //       price: "Price",
  //     },
  //     {
  //       title: "Order #123",
  //       price: "Price",
  //     },
  //     {
  //       title: "Order #123",
  //       price: "Price",
  //     },
  //   ];

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
    <Grid size={8}>
      <Item sx={{ boxSizing: "border-box", borderRadius: "15px" }}>
        {!show && !showInCart && cart?.length > 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "4%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "serif",
                fontSize: "18px",
                color: "#2a3336",
              }}
            >
              Recent Orders
            </Typography>
            <Typography sx={{ color: "#dba54a", fontSize: "15px" }}>
              View All
            </Typography>
          </Box>
        )}

        <Grid>
          <Stack spacing={3}>
            {product?.length > 0 ? (
              <>
                {product?.map((i) => (
                  <Item
                    sx={{
                      minHeight: "5vh",
                      backgroundColor: "#f7f6f3",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: "7vh",
                        width: "7vh",
                        backgroundColor: "#f4eedd",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#d9a520",
                        mr: 2,
                      }}
                    >
                      <img
                        src={i.image}
                        alt={i.name}
                        style={{ width: "30px", height: "30px" }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#2a2936",
                          fontWeight: "500",
                          width: "20%",
                        }}
                      >
                        {i.name}
                      </Typography>
                      {!show ? (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Button
                            onClick={() => decrement(i.id)}
                            sx={{
                              border: "1px solid #acbac4",
                              color: "black",
                              marginRight: "5%",
                            }}
                          >
                            -
                          </Button>
                          <Typography sx={{ marginRight: "5%" }}>
                            {findProduct(i.id)}
                          </Typography>
                          <Button
                            onClick={() => increment(i.id)}
                            sx={{ border: "1px solid #acbac4", color: "black" }}
                          >
                            +
                          </Button>
                        </Box>
                      ) : null}

                      <Typography
                        sx={{
                          color: "#2a2936",
                          fontWeight: "500",
                          width: "10%",
                        }}
                      >
                        {show ? `$${i.price}` : `$${price(i)}`}
                      </Typography>

                      {!show ? (
                        <Button
                          sx={{
                            border: "1px solid black",
                            backgroundColor: "#c40c0c",
                            borderRadius: "10px",
                            color: "white",
                            textTransform: "capitalize",
                          }}
                        >
                          Delete
                        </Button>
                      ) : null}
                    </Box>
                  </Item>
                ))}
              </>
            ) : (
              "No any selected product"
            )}
          </Stack>
        </Grid>
      </Item>
    </Grid>
  );
}

export default RecentOrderLeft;
