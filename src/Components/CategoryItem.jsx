import { Box, Typography } from "@mui/material";
import React from "react";

function CategoryItem({ itm }) {
  return (
    <>
      <Box
        sx={{
          width: "23%",
          height: "58vh",
          borderRadius: "15px",
          backgroundImage: `url(${itm.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display:"flex",
          alignItems:"flex-end"
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
          }}
        >
          <Typography
            sx={{ color: "#fbfaf8", fontFamily: "serif", fontSize: "25px" }}
          >
            {itm?.name}
          </Typography>
          <Typography sx={{ color: "#827e7e", fontSize: "15px" }}>
            {itm?.description}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CategoryItem;
