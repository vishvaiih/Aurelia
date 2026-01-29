import { Box, Button, Typography } from "@mui/material";
import { Sparkle, Sparkles } from "lucide-react";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useNavigate } from "react-router-dom";

function PerfectPieace() {

  const navigation = useNavigate();

  return (
    <>
      <Box sx={{ minHeight: "70vh", backgroundColor: "#f8f7f4" }}>
        <Box
          sx={{
            width: "48%",
            margin: "0px auto",
            minHeight: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Sparkles style={{ height: "8vh", width: "9%", color: "#d9a520" }} />
          <Typography sx={{ fontSize: "45px", fontFamily: "serif" }}>
            Ready to Find Your Perfect Piece?
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#92886b", textAlign: "center" ,margin:"2% 0% 5%"}}
          >
            Join our exclusive community and be the first to discover new
            collections, receive special offers, and get personalized jewelry
            recommendations.
          </Typography>

          <Box sx={{display:"flex"}}>
          <Button sx={{border:"1px solid #b68a1b",color:"#2a262a",backgroundColor:"#d8aa32",textTransform:"capitalize",borderRadius:"10px",padding:"8px 30px"}}>
            <Typography sx={{marginRight:"15px"}} onClick={() => navigation("/shop")}>Start Shopping</Typography>
            <ArrowForwardOutlinedIcon
              style={{ width: "15px", height: "15px" }}
            />
          </Button>
          <Button sx={{marginLeft:"15px",border:"1px solid #d9a520",color:"#d9a520",textTransform:"capitalize",borderRadius:"10px",padding:"8px 20px"}}>
            <Typography sx={{marginRight:"15px"}}  onClick={() => navigation("/signup")}>Create Account</Typography>
            
          </Button>
          
        </Box>

        </Box>


       

      </Box>
    </>
  );
}

export default PerfectPieace;
