import React from "react";
import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { categories, productTypes } from "../Database/Database";

function Categories({
  setSelectedCategory,
  
  setSelectedType,
  
 setSelectedRange
}) {
  const priceRange = [
    "under $200",
    "$500 - $1,000",
    "$1,000 - $3,000",
    "over $3,000",
  ];
  

  const handleChange = (name ,checked) => {
    console.log(name, "name");
    setSelectedCategory((prev) => checked ? [...prev, name] : prev.filter((itm) => itm !== name));
    
  };

  const HandleTypeChange = (type,checked) => {
    console.log("type",type)
       setSelectedType((prev) => checked ? [...prev, type] : prev.filter((itm) => itm !== type ));
  }

  const handlePriceChange = (Price,checked) => {
      setSelectedRange((prev) => checked ? [...prev,Price] : prev.filter((itm) => itm !== Price));
  }

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  return (
    <Box sx={{ marginRight: "130px" }}>
      <Box sx={{ marginTop: "10px" }}>
        <Typography sx={{ fontFamily: "serif" }}>Category</Typography>

        {categories.map((itm) => (
          <Box key={itm.id} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              onChange={(e) => handleChange(itm.name , e.target.checked )}
            
              {...label}
              style={{ color: "#d9a520" }}
            />
            <Typography
              sx={{
                color: "#413d39",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {itm.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: "10px" }}>
        <Typography sx={{ fontFamily: "serif" }}>Product Type </Typography>

        {productTypes.map((itm) => (
          <Box key={itm.id} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              onChange={(e) => HandleTypeChange(itm.name, e.target.checked)}
              {...label}
              style={{ color: "#d9a520" }}
            />
            <Typography
              sx={{
                color: "#413d39",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              {itm.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: "10px" }}>
        <Typography sx={{ fontFamily: "serif" }}>Price Range</Typography>

        {priceRange.map((itm) => (
          <Box key={itm.id} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox 
             onChange={(e) => handlePriceChange(itm, e.target.checked)}
            {...label} style={{ color: "#d9a520" }} />
            <Typography
              sx={{
                color: "#413d39",
                fontSize: "15px",
                fontWeight: "500",
                minWidth: "120px",
              }}
            >
              {itm}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
