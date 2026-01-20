import React, { useContext } from "react";
import { Package } from "lucide-react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";
import { useLocation } from "react-router-dom";

function RecentOrderLeft() {
  const { cart } = useContext(UserContext);

  const location = useLocation();
  const show = location.pathname == "/wishlist";

  console.log("....", cart);
  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  let findUser = cart?.find((itm) => itm.userId == getUserDetail);
  console.log("findUser", findUser);

  let findProduct = findUser?.items?.map((i) => i.productId);
  console.log("findProduct", findProduct);

  const product = products?.filter((i) => findProduct.includes(i.id));
  console.log("product", product);

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
        {!show && (
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
            {product.map((i) => (
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
                  <Typography sx={{ color: "#2a2936", fontWeight: "500" }}>
                    {i.name}
                  </Typography>
                  <Typography sx={{ color: "#2a2936", fontWeight: "500" }}>
                    ${i.price}
                  </Typography>
                </Box>
              </Item>
            ))}
          </Stack>
        </Grid>
      </Item>
    </Grid>
  );
}

export default RecentOrderLeft;
