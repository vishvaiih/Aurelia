import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from '@mui/material/Rating';
import { Typography, Box } from "@mui/material";

function SingleProductPage() {
    const [value, setValue] = React.useState(5);

  const productImg = [
    "/images/banner.png",
    "/images/banner.png",
    "/images/banner.png",
  ];

  return (
    <>
      <Header />
      <Box sx={{ backgroundColorcolor: "#fbfaf8" }}>
        <Box
          sx={{
            display: "flex",
            color: "#8a8075",
            margin: " 30px 60px",
            alignItems: "center",
          }}
        >
          <ArrowBackIcon
            sx={{ fontSize: "17px", marginRight: "8px", fontWeight: "500" }}
          />
          <Typography>Back to Shop </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%" }}>
            <img
              src="/images/banner.png"
              style={{
                height: "90vh",
                width: "87%",
                marginLeft: "60px",
                borderRadius: "17px",
              }}
            ></img>
            <Box
              sx={{
                display: "flex",
                margin: "15px 15px 15px 60px",
                width: "87%",
                justifyContent: "space-between",
              }}
            >
              {productImg.map((itm) => (
                <img
                  src={itm}
                  style={{ height: "27vh", width: "31%", borderRadius: "17px" }}
                ></img>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: "50%", marginLeft: "1%" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ color: "#7e7367", fontSize: "15px" }}>
                GOLD
              </Typography>
              <Box
                sx={{
                  margin: "0px 10px",
                  height: "6px",
                  width: "6px",
                  backgroundColor: "#7e7367",
                  borderRadius: "100%",
                }}
              ></Box>
              <Typography sx={{ color: "#7e7367", fontSize: "15px" }}>
                RINGS
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "33px",
                fontFamily: "serif",
                color: "#2a2622",
                letterSpacing: "2px",
              }}
            >
              Eternal Gold Ring
            </Typography>

            <Box>
                    <Rating name="read-only" value={value} readOnly />
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default SingleProductPage;
