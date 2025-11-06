import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#34251F] h-40 flex items-center justify-center flex-col">
      <div>
        <ul className="flex gap-5">
          <li className="text-white border-b-1">MEN</li>
          <li className="text-white border-b-1">WOMEN</li>
          <li className="text-white border-b-1">KIDS</li>
          <li className="text-white border-b-1">COLLECTION</li>
          <li className="text-white border-b-1">TRENDS</li>
        </ul>
      </div>
      <div className="mt-5">
        <p className="text-white">Copywrite@: FIFASH All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
