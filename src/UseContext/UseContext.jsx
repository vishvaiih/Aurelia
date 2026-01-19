import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 
     const [data, setData] = useState(() => {
            let getItem = JSON.parse(localStorage.getItem("data")) || [];
            return getItem;
          });


  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};
