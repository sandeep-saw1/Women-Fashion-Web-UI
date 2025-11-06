import React from "react";
import Navbar from "./components/Navbar";

import AllPage from "./pages/AllPage";
import NewCollection from "./pages/NewCollection";
import BestFashion from "./pages/BestFashion";
import BestSell from "./pages/BestSell";
import OurProduct from "./pages/OurProduct";
import DealOftheDay from "./pages/DealOftheDay";
import AboutUs from "./pages/AboutUs";
import FooterIMAGE from "./pages/FooterIMAGE";
import Footer from "./pages/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <AllPage />
      <NewCollection />
      <BestFashion />
      <BestSell />
      <OurProduct />
      <DealOftheDay />
      <AboutUs/>
      <FooterIMAGE/>
      <Footer/>
    </div>
  );
};

export default App;
