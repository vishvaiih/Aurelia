import React,{ useContext } from 'react'
import RecentOrderLeft from '../Components/recentOrderLeft'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";


function Cart() {
     const { cart } = useContext(UserContext);

     console.log("....", cart);
  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  let findUser = cart?.find((itm) => itm.userId == getUserDetail);
  console.log("findUser", findUser);

  let findProduct = findUser?.items?.map((i) => i.productId);
  console.log("findProduct", findProduct);

  const product = products?.filter((i) => findProduct.includes(i.id));
  console.log("product", product);

    
  return (
   <>
       <Header/>
      <RecentOrderLeft product={product}/>
      <Footer/>
   
   </>
  )
}

export default Cart
