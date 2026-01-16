import { Box, Button, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook, Twitter, Phone,Mail } from "lucide-react";
import TextField from '@mui/material/TextField';

function Footer() {
  return (
    <>
      <Box
        sx={{
          minHeight: "40vh",
          backgroundColor: "#2a2622",
          padding: "70px 70px 30px 70px ",
        
        }}
      >
        <Box sx={{  display: "flex",borderBottom:"1px solid #3f3b38"}}>

        <Box sx={{ width: "25%", padding: "20px" }}>
          <Typography
            sx={{ color: "#e0c685", fontFamily: "serif", fontSize: "21px" }}
          >
            Aurelia
          </Typography>
          <Typography
            sx={{
              color: "#a5a1a0",
              fontSize: "15px",
              marginTop: "13px",
              fontSize: "15px",
            }}
          >
            {" "}
            Crafting timeless jewelry pieces that celebrate life's precious
            moments since 1987.
          </Typography>
          <Box sx={{ display: "flex", color: "#a5a1a0", marginTop: "18px" }}>
            <InstagramIcon sx={{ marginRight: "10px" }} />
            <Facebook style={{ marginRight: "10px" }} />
            <Twitter style={{ marginRight: "10px" }} />
          </Box>
        </Box>

        <Box
          sx={{
            width: "25%",
            color: "#a5a1a0",
            fontSize: "10px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", marginBottom: "13px", color: "white" }}
          >
            SHOP
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Gold Collection
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Silver Collection
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Diamond Pieces
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Rings
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Necklaces
          </Typography>
        </Box>

        <Box
          sx={{
            width: "25%",
            color: "#a5a1a0",
            fontSize: "10px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", marginBottom: "13px", color: "white" }}
          >
            Customer Care
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Size Guide
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Shipping & Returns
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Care Instructions
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            FAQs
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Contact Us
          </Typography>
        </Box>

        <Box
          sx={{
            width: "25%",
            color: "#a5a1a0",
            fontSize: "10px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{ fontSize: "15px", marginBottom: "13px", color: "white" }}
          >
            Newsletter
          </Typography>
          <Typography sx={{ fontSize: "15px", marginBottom: "13px" }}>
            Subscribe for exclusive offers and new arrivals.
          </Typography>

          <Box sx={{marginBottom: "13px",display:"flex"}}>
             <TextField id="outlined-basic" placeholder="Your Email" variant="outlined" sx={{
            "& .MuiInputBase-input": {
              height: "35px",
              paddingTop: "0px",
              paddingBottom: "0px",
              backgroundColor:"#3f3b38",
              borderRadius:"10px",
              border:"1px solid #64615e",
              marginRight:"10px"
            
            },
          }} />
          <Button sx={{backgroundColor:"#d8ac3b",border:"1px solid black",borderRadius:"10px",color:"black",fontSize:"12px",textTransform:"capitalize"}}>Join</Button>
          </Box>

         

          <Box sx={{marginBottom: "13px",display:"flex"}}>
            <Phone  />
            <Typography sx={{ fontSize: "15px",marginLeft:"10px"}}>
              +1 (800) 555-JEWEL
            </Typography>
          </Box>

          <Box sx={{marginBottom: "13px",display:"flex"}}>
          <Mail />
            <Typography sx={{ fontSize: "15px",marginLeft:"10px"}}>
              hello@aurelia.com
            </Typography>
          </Box>

        </Box>

        </Box>

        <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"30px",color:"#a5a1a0"}}>
          <Typography sx={{fontSize:"15px"}}>© 2026 Aurelia Jewels. All rights reserved.</Typography>
          <Box sx={{display:"flex"}}>
          <Typography sx={{fontSize:"15px"}}>Privacy Policy</Typography>
          <Typography sx={{fontSize:"15px",marginLeft:"20px"}}>Terms of Service</Typography>
          </Box>
         
        </Box>


       

      </Box>
    </>
  );
}

export default Footer;
