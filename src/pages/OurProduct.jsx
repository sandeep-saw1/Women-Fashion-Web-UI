import React, { useState } from "react";
import OurProductCards from "./OurProductCards";

const OurProduct = () => {
  const [filter, setFilter] = useState("HOT");

  return (
    <div className="px-5 h-200 py-4 md:h-120 md:px-10">
      <div>
        <h1 className="text-5xl font-bold">Our Product</h1>
      </div>

      <div id='line' className="overflow-x-auto mt-3">
        <ul className="flex gap-5 whitespace-nowrap p-2">
          {["HOT", "ON SALE", "TRENDING NOW", "NEW ARRIVAL"].map((cat) => (
            <li
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer font-semibold text-xl md:text-[14px] md:hover:border-b-2 pb-1 ${
                filter === cat ? "border-b-2 border-black" : ""
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <OurProductCards filter={filter} />
    </div>
  );
};

export default OurProduct;
