import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Typography,Box } from '@mui/material';

function SingleProductPage() {
  return (
    <>
    <Header/>
      <Box sx={{color:"#fbfaf8"}}>
          <Box sx={{display:"flex",color:"#8a8075",margin:" 30px 60px",alignItems:"center"}}>
            <ArrowBackIcon sx={{fontSize:"17px",marginRight:"8px",fontWeight:"500"}}/>
             <Typography>Back to Shop </Typography>
      
          </Box>


      </Box>


     <Footer/>
    
    </>



  )
}

export default SingleProductPage
