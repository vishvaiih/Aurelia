import React, { useContext, useState } from "react";

import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { useLocation } from "react-router-dom";
import { UserContext } from "../UseContext/UseContext";
import RecentOrderLeftItem from "./RecentOrderLeftItem";

function RecentOrderLeft({ product, increment, decrement,findProduct, price}) {
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
                 
                         <RecentOrderLeftItem i={i}   />

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
