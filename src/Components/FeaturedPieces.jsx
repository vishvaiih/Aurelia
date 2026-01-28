import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function FeaturedPieces() {
  return (
   <>
   <Box sx={{minHeight:"90vh",backgroundColor:"#f8f7f4"}}>
          <Box sx={{width:"90%",margin:"0px auto",border:"2px solid",minHeight:"90vh"}}>
             
             <Box sx={{margin:"5% 0% 3%"}}>
                <Typography sx={{fontFamily:"serif",fontSize:"45px"}}>Featured Pieces</Typography>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>

                      <Typography sx={{color:"#89887e"}}>Our most beloved creations, handpicked for their exceptional beauty</Typography>
                      <Box sx={{color:"#d9a520",width:"30%",display:"flex",justifyContent:"flex-end",alignItems:"center"}}> 
                        <Typography sx={{fontSize:"15px",marginRight:"13px"}} >View All</Typography>
                         <ArrowForwardOutlinedIcon style={{width:"15px",height:"15px"}}/>
                      </Box>

                </Box>        
             </Box>

             



          </Box>

   </Box>
   
   
   
   </>
  )
}

export default FeaturedPieces
