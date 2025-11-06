import React from "react";
import BestSellIMAGES from "./BestSellIMAGES";

const BestSell = () => {
  return (
    <div className="h-190 px-10 py-2 bg-[#34291F] md:h-95 w-full md:flex">
      <div className="md:h-89 md:w-2/2">
        <h1 className="text-5xl font-bold text-white">Best Seller Product</h1>
        <p className="text-xl mt-4 text-white md:text-[15px]">
          We believe true luxury lies in quality and attitude. Each design is
          thoughtfully created for those who dare to stand out, those who
          believe style is a lifestyle, not a choice. From everyday essentials
          to runway-inspired looks, our fashion is made for dreamers, achievers,
          and trend-setters like you. Step into elegance. Live with purpose.
          Dress with confidence.
        </p>
        <button className="text-white px-15 active:scale-95 py-4 border-2 mt-5 md:px-5 md:mt-2 md:py-3">
          SEE MORE
        </button>
      </div>
      <div id="scroll" className="flex gap-5 h-110 md:mt-0 md:h-89 overflow-x-auto mt-5">
        <div className="w-100">
          <BestSellIMAGES
            img="https://images.unsplash.com/photo-1539109136881-3be0616acf4b"
            namm="Winter Classic Coat"
            discount="$230"
            price="$155"
          />
        </div>

        <div className="w-100">
          <BestSellIMAGES
            img="https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg"
            namm="Trendy Denim Jacket"
            discount="$190"
            price="$129"
          />
        </div>

        <div className="w-100">
          <BestSellIMAGES
            img="https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274360_1280.jpg"
            namm="Casual Street Hoodie"
            discount="$120"
            price="$79"
          />
        </div>

        <div className="w-100">
          <BestSellIMAGES
            img="https://images.pexels.com/photos/18977034/pexels-photo-18977034.jpeg"
            namm="Luxury Evening Dress"
            discount="$560"
            price="$389"
          />
        </div>

        <div className="w-100">
          <BestSellIMAGES
            img="https://images.pexels.com/photos/896293/pexels-photo-896293.jpeg"
            namm="Summer Vibe Top"
            discount="$80"
            price="$49"
          />
        </div>

        <div className="w-100">
          <BestSellIMAGES
            img="https://images.pexels.com/photos/871494/pexels-photo-871494.jpeg"
            namm="Modern Kurti Set"
            discount="$140"
            price="$109"
          />
        </div>

        <div className="w-100">
          <BestSellIMAGES
            img="https://images.pexels.com/photos/7896166/pexels-photo-7896166.jpeg"
            namm="Leather Moto Jacket"
            discount="$320"
            price="$229"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSell;
