import React from "react";

const HomePage = () => {
  return (
    <div className="bg-[#EEDDCC] h-full w-full flex flex-col md:flex-row md:h-screen px-10">
      <div className="w-full h-full">
        <h1 className="text-5xl font-bold mt-10 text-[#34251F] md:mt-25 "> Find The Best Fashion Style For You</h1>
        <p className="mt-6 text-xl">
          Step into the world of fashion where elegance meets comfort. Explore
          curated outfits designed to make every moment stylish and
          unforgettable.
        </p>
        <button className="px-8 py-4 font-bold mt-5 bg-[#34251F] text-white cursor-pointer active:scale-95">SHOP NOW</button>
      </div>
      <div className=" h-[100%] w-[100%] p-2">
        <img
        className="h-full md:h-140 mt-4 rounded-bl-[20vw] object-cover w-full"
          src="https://cdn.pixabay.com/photo/2022/06/07/14/26/woman-7248496_1280.jpg"
          alt="trendy cloths"
        />
      </div>
    </div>
  );
};

export default HomePage;
