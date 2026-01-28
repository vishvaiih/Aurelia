import { Box, Typography } from "@mui/material";
import React,{useState} from "react";

function Details() {
  const [activeTab, setActiveTab] = useState("Details");


  const nav = ["Details", "Care Instruction", "Shipping & Returns"];

 

  
  return (
    <>
      <Box
        sx={{ marginTop: "6%", border: "2px solid black", minHeight: "50vh" }}
      >
        <Box sx={{ display: "flex", borderBottom: "1px solid #e7e2da" }}>
          {nav?.map((itm) => (
            <Typography
              onClick={() => setActiveTab(itm)}
              sx={{
                color: "#312622",
                fontSize: "15px",
                padding: "15px",
                borderBottom: activeTab == itm ? "2px solid #d9a520":"none",
                backgroundColor: activeTab == itm?"white":"none",
                borderRadius: activeTab == itm ? "10px 10px 0px 0px" :"none",
                cursor: "pointer",
              }}
            >
              {itm}
            </Typography>
          ))}
        </Box>

<Box sx={{color:"#7e7367"}}>
<Typography sx={{margin:"2% 0%"}}>A stunning 18K gold ring featuring intricate filigree work and a timeless design that symbolizes eternal love.</Typography>
<Typography>Material: 18K Yellow Gold</Typography>
<Typography>Weight: 5.2g</Typography>
<Typography>Category: Gold</Typography>
<Typography></Typography>
<Typography></Typography>
<Typography></Typography>

</Box>
       
      </Box>
    </>
  );
}

export default Details;
