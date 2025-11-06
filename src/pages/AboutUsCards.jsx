import React from "react";

const AboutUsCards = (props) => {
  return (
    <div>
      <div className="mt-5 bg-[#EEDDCC] md:mt-3 md:p-3 md:w-80 p-6 rounded-xl shadow-md flex items-center justify-center w-90">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-[#34291F] leading-snug">
            {props.heading}
          </h1>

          <p className="mt-3 text-[#4A3B2C] leading-relaxed text-sm">
            {props.para}
          </p>

          <img
            className="rounded-full h-20 object-cover w-20 mx-auto mt-5 border-4 border-[#34291F]/70 shadow-sm"
            src={props.img}
            alt="reviewer"
          />

          <p className="mt-2 text-lg font-semibold text-[#34291F]">
            {props.name}
          </p>
          <p className="text-sm text-[#4A3B2C] tracking-wide">{props.about}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCards;
