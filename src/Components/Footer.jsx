import { Box, Typography } from "@mui/material";
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Facebook,Twitter
} from "lucide-react";

function Footer() {
  return (
  
    <>
      <Box sx={{minHeight:"40vh",backgroundColor:"#2a2622",padding:"70px"}}>
          
          <Box sx={{width:"25%"}}>
               <Typography sx={{color:"#e0c685",fontFamily:"serif",fontSize:"21px"}}>Aurelia</Typography> 
               <Typography sx={{color:"#a5a1a0",fontSize:"15px",marginTop:"13px",fontSize:"17px"}}> Crafting timeless jewelry pieces that celebrate life's precious moments since 1987.</Typography>
               <Box sx={{display:"flex",color:"#a5a1a0",marginTop:"18px"}}>
                      <InstagramIcon sx={{marginRight:"10px"}} />
                      <Facebook style={{marginRight:"10px"}}/>
                      <Twitter style={{marginRight:"10px"}}/>
               </Box>
                
          </Box>

          <Box>

          </Box>

          <Box>

          </Box>

          <Box>

          </Box>

      </Box>
      

    </>
  )
}

export default Footer
