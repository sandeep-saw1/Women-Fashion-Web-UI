import React from "react";

const BestFashion = () => {
  return (
    <div className="h-190 md:h-screen  flex flex-col md:flex-row">
      <div className="px-10  mt-5 md:w-1/1">
        <h1 className="text-5xl font-bold md:mt-30">Best Fashion Since 2024</h1>
        <p className="mt-7 text-xl">
          Whether you're chasing everyday elegance or statement luxury, our
          collections blend modern trends with classic charm, so your wardrobe
          always stays ahead of time.Welcome to a fashion experience where
          comfort meets class, and your individuality takes center stage.
        </p>
      </div>
      <div className=" h-full w-full mt-10 px-10  md:h-full md:mt-0 md:items-center md:flex md:py-5">
        <img
          className="h-100 w-full object-cover rounded-tl-[12vw] md:h-120"
          src="https://cdn.pixabay.com/photo/2025/04/24/05/23/woman-9554464_1280.jpg"
          alt=""
        />

        <div className="bg-white flex p-2 justify-between items-center shadow-[0_0_20px_4px_rgba(0,0,0,0.15)] absolute md:ml-[-30vw] md:mt-[20vw] ">
          <div className="border-r-2 px-1">
            <h1 className="text-3xl font-bold">2015</h1>
            <p>FLASH FOUNDED</p>
          </div>
          <div className="border-r-2 px-2">
            <div className="flex items-center gap-2">
              {" "}
              <h1 className="text-3xl font-bold">8900</h1>
              <i class="ri-bar-chart-grouped-line"></i>
            </div>
            <p>PRODUCT SOLD</p>
          </div>
          <div className="px-3">
            <div className="flex gap-2 items-center">
              <h1 className="text-3xl font-bold">3155</h1>
              <i class="ri-bar-chart-grouped-line"></i>
            </div>
            <p>BEST REVIEWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFashion;
