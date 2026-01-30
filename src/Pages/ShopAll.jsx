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
  const [selectedRange, setSelectedRange] = useState([]);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (selectedCategory.length == 0 && selectedType.length == 0 && selectedRange.length == 0) {
      setFilterData(products);
      return;
    }

    const filterCategory = products?.filter((itm) => selectedCategory.some((category) => category?.toLowerCase() === itm?.category?.toLowerCase()))

    const  filterType = filterCategory?.filter((itm) => selectedType.some((type) => type?.toLowerCase() === itm?.type?.toLowerCase()))

    const filterByPrice =  filterType?.filter((itm) => selectedRange.some((p) => {
            const price = p.trim().toLowerCase();

            if (price === "Under $500") {
              return itm.price <= 500;
            }
            if (price === "$500 - $1,000") {
              return itm.price > 500 && itm.price < 1000;
            }
            if (price === "$1,000 - $3,000") {
              return itm.price > 1000 && itm.price < 3000;
            }
            if (price === "Over $3,000") {
              return itm.price > 3000;
            }
          }) )

    // const filter = products?.filter(
    //   (itm) =>
      
    //     selectedCategory.some(
    //       (category) => category?.toLowerCase() === itm?.category?.toLowerCase()
    //     ) ||
    //     selectedType.some(
    //       (type) => type?.toLowerCase() === itm?.type?.toLowerCase()
    //     ) ||
    //     selectedRange.some((p) => {
    //       const price = p.trim().toLowerCase();
    //       // if(price.length == 0){
    //       //   return itm;
    //       // }
    //       if (price === "Under $500") {
    //         return itm.price <= 500;
    //       }
    //       if (price === "$500 - $1,000") {
    //         return itm.price > 500 && itm.price < 1000;
    //       }
    //       if (price === "$1,000 - $3,000") {
    //         return itm.price > 1000 && itm.price < 3000;
    //       }
    //       if (price === "Over $3,000") {
    //         return itm.price > 3000;
    //       }
    //     })
    // );
    console.log("filterCategory", filterCategory);
    console.log("filterType",filterType);
    console.log()

    // setFilterData(filter);

    // localStorage.setItem("filterData",JSON.stringify(filter));
  }, [selectedCategory, selectedType,selectedRange]);

 useEffect(() => {
      const getFilterData = JSON.parse(localStorage.getItem("filterData")) || [];
      console.log(getFilterData,"getFilterData")

      setFilterData(getFilterData);

 },[]);

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
