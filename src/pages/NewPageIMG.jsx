import React from "react";

const NewPageIMG = (props) => {
  return (
    <div className="h-65 md:w-75 ">
      <img className="object-cover h-full w-full" src={props.img} alt="" />
    </div>
  );
};

export default NewPageIMG;
