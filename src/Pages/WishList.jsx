import React, { useContext, useEffect,useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { products } from "../Database/Database";
import { UserContext } from '../UseContext/UseContext';

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import RecentOrderLeftItem from '../Components/RecentOrderLeftItem';
import { useLocation } from 'react-router-dom';


function WishList() {

     const { wishList } = useContext(UserContext);

     const [wishListProduct,setWishListProduct] = useState("")

   

     useEffect(() => {

      // console.log("....vvvv", wishList);
      let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
    
      let findUser = wishList?.find((itm) => itm.userId == getUserDetail);
      // console.log("findUser", findUser);
    
      let allProductId = findUser?.items?.map((i) => i);
      // console.log("allProductId", allProductId);
    
      const wishListProduct = products?.filter((i) => allProductId?.includes(i.id));
      // console.log("product", product);

      setWishListProduct(wishListProduct);
     },[])
    
 
         

  return (
   <>
            <Header/>
            {/* <RecentOrderLeft product={product}/> */}


            <Grid>
          <Stack spacing={3}>
            {wishListProduct?.length > 0 ? (
              <>
                {wishListProduct?.map((i) => (
                 
                         <RecentOrderLeftItem i={i} key={i.id} />
                         

                ))}
              </>
            ) : (
              "No any selected product"
            )}
          </Stack>
        </Grid>
            <Footer/>
   </>
  )
}

export default WishList
