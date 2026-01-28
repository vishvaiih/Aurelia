import { Box, Typography } from '@mui/material'
import React from 'react'
import OneProduct from './OneProduct'
import Grid from "@mui/material/Grid";


function SameProduct({selectedProduct}) {
  return (
    <>
    
       <Box sx={{marginTop:"6%"}}>
            
            <Typography sx={{fontSize:"30px",fontFamily:"serif"}}>You May Also Like</Typography>

            <Grid
        sx={{ display: "flex" ,margin:"2% 0%"}}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
                
                <OneProduct  selectedProduct={selectedProduct}/>

                </Grid>


       </Box>
    
    
    </>
  )
}

export default SameProduct
