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

     const { wishList,setWishList } = useContext(UserContext);

     const [wishListProduct,setWishListProduct] = useState("")


     let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

     useEffect(() => {

      // console.log("....vvvv", wishList);
    
    
      let findUser = wishList?.find((itm) => itm.userId == getUserDetail);
      // console.log("findUser", findUser);
    
      let allProductId = findUser?.items?.map((i) => i);
      // console.log("allProductId", allProductId);
    
      const wishListProduct = products?.filter((i) => allProductId?.includes(i.id));
      // console.log("product", product);

      setWishListProduct(wishListProduct);
     },[wishList])


     const  removeProductFromWhishlist = (id) => {
       console.log("....",id);


       const removeSelectedProduct = wishList?.map((itm) =>
        Number(itm.userId) === Number(getUserDetail)
          ? {
              ...itm,
              items: itm?.items?.filter(
                (item) => Number(item) !== Number(id)
              ),
            }
          : itm
      );

      console.log("removeSelectedProduct",removeSelectedProduct)

      setWishList(removeSelectedProduct)

      localStorage.setItem("wishlist",JSON.stringify(removeSelectedProduct))
     }


  return (
   <>
            <Header/>
            {/* <RecentOrderLeft product={product}/> */}


            <Grid>
          <Stack spacing={3}>
            {wishListProduct?.length > 0 ? (
              <>
                {wishListProduct?.map((i) => (
                 
                         <RecentOrderLeftItem i={i} key={i.id} removeProductFromWhishlist={removeProductFromWhishlist} />
                         

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
