import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { UserContext } from "../UseContext/UseContext";

function RecentOrderLeftItem({
  i,
  
  priceOFCartProduct = () => {},
  typeCart,
  deleteAction,
  removeProductFromWhishlist,
}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

   const {  increment, decrement,  productQty } =
      useContext(UserContext);

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
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
        {typeCart ? (
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
              {productQty(i.id)}
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
          {!typeCart ? `$${i.price}` : `$${priceOFCartProduct(i)}`}
        </Typography>

        {typeCart ? (
          <Button
            onClick={() => deleteAction(i.id)}
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
        ) : (
          <Checkbox
            onClick={() => removeProductFromWhishlist(i.id)}
            {...label}
            checked={i}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        )}
      </Box>
    </Item>
  );
}

export default RecentOrderLeftItem;
