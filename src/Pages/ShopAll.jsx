import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box } from "@mui/material";
import AllJewelry from "../Components/AllJewelry";
import Filters from "../Components/Filters";
import ProductList from "../Components/ProductList";
import Categories from "../Components/Categories";

function ShopAll() {

  

  return (
    <>
      <Header />

      <AllJewelry />

      <Box
        sx={{
          minHeight: "600px",
          padding: "40px 65px",
          backgroundColor: "#fbfaf8",
        }}
      >
        <Filters />

        <Box sx={{ display: "flex" }}>
          <Categories />

          <ProductList />
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default ShopAll;
