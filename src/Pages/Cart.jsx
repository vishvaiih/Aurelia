import React,{ useContext,useState } from 'react'
import RecentOrderLeft from '../Components/recentOrderLeft'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { UserContext } from "../UseContext/UseContext";
import { products } from "../Database/Database";


function Cart() {
     const { cart } = useContext(UserContext);
     const [qty,setQty] = useState(0);

     console.log("....", cart);
  let getUserDetail = JSON.parse(localStorage.getItem("userDetail"));

  let findUser = cart?.find((itm) => itm.userId == getUserDetail);
  console.log("findUser", findUser);

  let allProduct = findUser?.items?.map((i) => i.productId);
  console.log("allProduct", allProduct);

  const product = products?.filter((i) => allProduct.includes(i.id));
  console.log("product", product);



  const increment = (productid) => {
   console.log(".....",productid)

   let changeQty =  findUser?.items?.map((itm) => itm.productId === productid ? {...itm , qty: itm.qty + 1} : itm)
   console.log("changeQty",changeQty);



   // Findproduct.qty += 1;


   
  
}

    
  return (
   <>
       <Header/>
      <RecentOrderLeft product={product} increment={increment} qty={qty}/>
      <Footer/>
   
   </>
  )
}

export default Cart
