import React from "react";

import { fashionProducts } from "./FashionData.jsx";
import data from "./FashionData.jsx";



const OurProductCards = ({ filter }) => {
  const filtered = fashionProducts.filter((prod) => prod.category === filter);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {filtered.map((item) => (
        <div key={item.id} className="border shadow-md bg-white p-1">
          <img
            src={item.img}
            alt={item.name}
            className="h-52 w-full object-cover"
          />
          <h2 className="font-bold text-lg mt-2">{item.name}</h2>
          <p>
            {" "}
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            {item.rating}
          </p>
          <div className="flex gap-3 items-center">
            <p className="font-bold text-gray-400">${item.price}</p>
            <p className="text-sm font-bold">{item.discount}% OFF</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProductCards;
