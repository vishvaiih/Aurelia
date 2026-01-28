import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import HandCrafted from "../Components/HandCrafted";
import ShopByCategory from "../Components/ShopByCategory";
import FeaturedPieces from "../Components/FeaturedPieces";
import OurStory from "../Components/OurStory";
import BestSellers from "../Components/BestSellers";
import PerfectPieace from "../Components/PerfectPieace";
import Footer from "../Components/Footer";


function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HandCrafted/>
      <ShopByCategory/>
      <FeaturedPieces/>
      <OurStory/>
      <BestSellers/>
      <PerfectPieace/>
      <Footer/>
    </>
  );
}

export default Home;
