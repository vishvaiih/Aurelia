import React, { useContext, useEffect,useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import RecentOrderLeft from '../Components/recentOrderLeft'
import { products } from "../Database/Database";
import { UserContext } from '../UseContext/UseContext';

function WishList() {

     const { wishList } = useContext(UserContext);

     const [product,setProduct] = useState("")

     useEffect(() => {

      // console.log("....vvvv", wishList);
      let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));
    
      let findUser = wishList?.find((itm) => itm.userId == getUserDetail);
      // console.log("findUser", findUser);
    
      let findProduct = findUser?.items?.map((i) => i);
      // console.log("findProduct", findProduct);
    
      const product = products?.filter((i) => findProduct?.includes(i.id));
      // console.log("product", product);

      setProduct(product);
     },[])
    
         

  return (
   <>
            <Header/>
            <RecentOrderLeft product={product}/>
            <Footer/>
   </>
  )
}

export default WishList
