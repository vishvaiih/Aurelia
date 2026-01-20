import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import ShopAll from "./Pages/ShopAll";
import Cart from "./Pages/Cart";
import WishList from "./Pages/WishList";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
      </Routes>
    </>
  );
}

export default Routing;
