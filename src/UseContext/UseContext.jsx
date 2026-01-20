import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 
     const [data, setData] = useState(() => {
            let getItem = JSON.parse(localStorage.getItem("data")) || [];
            return getItem;
          });

    const [cart,setCart] = useState(() => {
      let getCart = JSON.parse(localStorage.getItem("cart")) || [];
      return getCart;
    });   
    
   const [wishList,setWishList] = useState([]);


  return (
    <UserContext.Provider value={{ data, setData,cart,setCart,wishList,setWishList}}>
      {children}
    </UserContext.Provider>
  );
};
