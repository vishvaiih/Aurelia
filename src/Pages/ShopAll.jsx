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
    let finalData = products;
    if (

      selectedCategory.length == 0 &&
      selectedType.length == 0 &&
      selectedRange.length == 0
    ) {
      setFilterData(products);
      return;
    }

    const filterCategory = products?.filter((itm) =>
      selectedCategory.some(
        (category) => category?.toLowerCase() === itm?.category?.toLowerCase()
      )
    );

    const filterTypeByFilterCategory = filterCategory?.filter((itm) =>
      selectedType.some(
        (type) => type?.toLowerCase() === itm?.type?.toLowerCase()
      )
    );

    const filterType = products?.filter((itm) =>
      selectedType.some(
        (type) => type?.toLowerCase() === itm?.type?.toLowerCase()
      )
    );

    const filterCategoryByprice = filterCategory?.filter((itm) =>
      selectedRange.some((p) => {
        const price = p.trim().toLowerCase();

        if (price === "under $500") {
          return itm.price <= 500;
        }
        if (price === "$500 - $1,000") {
          return itm.price > 500 && itm.price < 1000;
        }
        if (price === "$1,000 - $3,000") {
          return itm.price > 1000 && itm.price < 3000;
        }
        if (price === "over $3,000") {
          return itm.price > 3000;
        }
      })
    );

    const filterByPrice = filterTypeByFilterCategory?.filter((itm) =>
      selectedRange.some((p) => {
        const price = p.trim().toLowerCase();

        if (price === "under $500") {
          return itm.price <= 500;
        }
        if (price === "$500 - $1,000") {
          return itm.price > 500 && itm.price < 1000;
        }
        if (price === "$1,000 - $3,000") {
          return itm.price > 1000 && itm.price < 3000;
        }
        if (price === "over $3,000") {
          return itm.price > 3000;
        }
      })
    );

    const filterTypeByPrice = filterType?.filter((itm) =>
      selectedRange.some((p) => {
        const price = p.trim().toLowerCase();

        if (price === "under $500") {
          return itm.price <= 500;
        }
        if (price === "$500 - $1,000") {
          return itm.price > 500 && itm.price < 1000;
        }
        if (price === "$1,000 - $3,000") {
          return itm.price > 1000 && itm.price < 3000;
        }
        if (price === "over $3,000") {
          return itm.price > 3000;
        }
      })
    );

    const filterByPriceOnly = products?.filter((itm) => 
      selectedRange.some((p) => {
        const price = p.trim().toLowerCase();

        if (price === "under $500") {
          return itm.price <= 500;
        }
        if (price === "$500 - $1,000") {
          return itm.price > 500 && itm.price < 1000;
        }
        if (price === "$1,000 - $3,000") {
          return itm.price > 1000 && itm.price < 3000;
        }
        if (price === "over $3,000") {
          return itm.price > 3000;
        }
      })
    
    )

    if (
      selectedCategory.length > 0 &&
      selectedType.length === 0 &&
      selectedRange.length === 0
    ) {
      finalData = filterCategory;
    } else if (
      selectedCategory.length === 0 &&
      selectedType.length > 0 &&
      selectedRange.length === 0
    ) {
      finalData = filterType;
    } else if (
      selectedCategory.length > 0 &&
      selectedType.length > 0 &&
      selectedRange.length === 0
    ) {
      finalData = filterTypeByFilterCategory;
    } else if (
      selectedCategory.length > 0 &&
      selectedType.length === 0 &&
      selectedRange.length > 0
    ) {
      finalData = filterCategoryByprice;
    } else if (
      selectedCategory.length > 0 &&
      selectedType.length > 0 &&
      selectedRange.length > 0
    ) {
      finalData = filterByPrice;
    } else if (
      selectedCategory.length === 0 &&
      selectedType.length > 0 &&
      selectedRange.length > 0
    ) {
      finalData = filterTypeByPrice;
    }else if(
      selectedCategory.length === 0 &&
      selectedType.length === 0 &&
      selectedRange.length > 0
    ){
      finalData = filterByPriceOnly;
    }

    setFilterData(finalData);

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
    // console.log("filterCategory", filterCategory);
    // console.log("filterTypeByFilterCategory", filterTypeByFilterCategory);
    // console.log("filterType", filterType);

    // console.log("filterCategoryByprice", filterCategoryByprice);
    // console.log("filterByPrice", filterByPrice);

    // console.log("filterTypeByPrice", filterTypeByPrice);

    // setFilterData(filter);

    // localStorage.setItem("filterData",JSON.stringify(filter));
  }, [selectedCategory, selectedType, selectedRange]);

  useEffect(() => {
    setFilterData(products);
  }, []);

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
