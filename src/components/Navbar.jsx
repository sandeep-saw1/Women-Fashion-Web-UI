import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center px-10 h-20 bg-[#EEDDCC]">
        <div>
          <h1 className="text-2xl">FIFASH</h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-5">
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              MEN
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              WOMEN
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              KIDS
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              COLLECTION
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              TRENDS
            </li>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <i className="ri-rectangle-line text-2xl"></i>
            <p className="bg-red-600 text-red-600 h-3 w-3 absolute mt-[-28px] ml-[1.2vw]"></p>
          </div>
          <button className="px-5 font-bold cursor-pointer py-2 hidden border-1 active:scale-95 md:flex">
            LOGIN
          </button>

          <i
            className="ri-menu-3-line text-2xl md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
          ></i>
        </div>
      </div>

      {open && (
        <div className="absolute bg-[#EEDDCC] w-full top-0 left-0 h-screen px-10 py-5 z-50">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">FIFASH</h1>
            <i
              className="ri-close-large-line text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            ></i>
          </div>

          <ul className="flex flex-col mt-5 gap-5 text-lg">
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              MEN
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              WOMEN
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              KIDS
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              COLLECTION
            </li>
            <li className="cursor-pointer hover:text-[#34251F] hover:border-b-1">
              TRENDS
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
