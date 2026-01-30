import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Box } from "@mui/material";
import AllJewelry from "../Components/AllJewelry";
import Filters from "../Components/Filters";
import ProductList from "../Components/ProductList";
import Categories from "../Components/Categories";
import { products } from "../Database/Database";

function ShopAll() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const[selectedRange,setSelectedRange] = useState([]);

  const [filterData, setFilterData] = useState([]);
  

  useEffect(() => {
    if (selectedCategory.length == 0 && selectedType.length == 0) {
      setFilterData(products);
      return;
    }

    const filter = products?.filter(
      (itm) =>
        selectedCategory.some(
          (category) => category?.toLowerCase() === itm?.category?.toLowerCase()
        ) || selectedType.some(
          (type) =>  type?.toLowerCase() === itm?.type?.toLowerCase())
    );
    console.log("filter", filter);

    setFilterData(filter);
  }, [selectedCategory,selectedType]);

  console.log("selectedRange", selectedRange);

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
          <Categories
           
            setSelectedCategory={setSelectedCategory}
            setSelectedType={setSelectedType}
           
           
            setSelectedRange={setSelectedRange}
          />

          <ProductList products={filterData} />
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default ShopAll;
