import React from "react";

const BestSellIMAGES = (props) => {
  return (
    <div className="flex gap-5">
      <div className="h-100 w-70 overflow-hidden bg-white md:h-89 rounded-lg shadow-md p-3">
        <img className="h-70 w-full md:h-60 object-cover" src={props.img} alt="" />
        <div className="p-2">
          <p>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
            <i class="ri-star-s-fill"></i>
          </p>
          <h1 className="font-bold text-xl">{props.namm}</h1>
          <div className="flex gap-5 mt-2">
            <p className="font-bold text-gray-500">{props.discount}</p>
          <p className="font-bold">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellIMAGES;
