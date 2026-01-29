import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import FeaturePieaceItem from "./FeaturePieaceItem";
import Grid from "@mui/material/Grid";
import { products } from "../Database/Database";

function BestSellers() {
  return (
    <Box sx={{ minHeight: "90vh", backgroundColor: "#fbfaf8", padding: "1px" }}>
      <Box sx={{ width: "90%", margin: "0px auto", minHeight: "90vh" }}>
        <Box sx={{ margin: "5% 0% 3%" }}>
          <Typography sx={{ fontFamily: "serif", fontSize: "45px" }}>
            Bestsellers
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#89887e" }}>
              The pieces our customers can't stop talking about
            </Typography>
            <Box
              sx={{
                color: "#d9a520",
                width: "30%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginRight: "2%",
              }}
            >
              <Typography sx={{ fontSize: "15px", marginRight: "13px" }}>
                View All
              </Typography>
              <ArrowForwardOutlinedIcon
                style={{ width: "15px", height: "15px" }}
              />
            </Box>
          </Box>
        </Box>

        <Grid
          sx={{ display: "flex", margin: "2% 0%" }}
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {products?.slice(4, 8).map((itm) => (
            <FeaturePieaceItem itm={itm} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BestSellers;
