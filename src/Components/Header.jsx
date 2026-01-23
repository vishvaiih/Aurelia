import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { User } from "lucide-react";

function Header() {
  const navigation = useNavigate();

  let getItem = JSON.parse(localStorage.getItem("userDetail"));
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fbfaf8",
          borderBottom: "1px solid #e7e2da",
          width: "100%",
          height: "74px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ margin: "60px", display: "flex" }}>
          <Typography className="Aurelia" onClick={() => navigation("/")}>
            Aurelia
          </Typography>
          <Box className="menu">
            <Typography
              className="perticularmenu Home"
              onClick={() => navigation("/")}
            >
              Home
            </Typography>
            <Typography
              className="perticularmenu"
              onClick={() => navigation("/shop")}
            >
              Shop All
            </Typography>
            <Typography className="perticularmenu">Gold</Typography>
            <Typography className="perticularmenu"> Silver</Typography>
            <Typography className="perticularmenu">Diamonds</Typography>
          </Box>
        </Box>

        <Box className="icon">
          <SearchIcon className="iconmargin" />
          <FavoriteBorderOutlinedIcon
            className="iconmargin"
            onClick={() => navigation("/wishlist")}
          />
          <LocalMallOutlinedIcon
            className="iconmargin"
            onClick={() => navigation("/cart")}
          />

          {getItem ? (
            <User
              onClick={() => navigation("/profile")}
              className="iconmargin"
            />
          ) : (
            <Button className="Signinbtn" onClick={() => navigation("/login")}>
              Sign In
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Header;
