import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Header() {
  return (
    <>
      <Box className="header">
        <Box className="margin">
          <Typography className="Aurelia">Aurelia</Typography>
          <Box className="menu">
            <Typography className="perticularmenu">Home</Typography>
            <Typography  className="perticularmenu">Shop All</Typography>
            <Typography  className="perticularmenu">Gold</Typography>
            <Typography  className="perticularmenu"> Silver</Typography>
            <Typography  className="perticularmenu">Diamonds</Typography>
          </Box>
        </Box>

        <Box>
          <SearchIcon />
          <FavoriteBorderOutlinedIcon />
          <Button>Sign In</Button>
        </Box>
      </Box>
    </>
  );
}

export default Header;
