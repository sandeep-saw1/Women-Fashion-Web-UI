import React from "react";
import NewPageIMG from "./NewPageIMG";

const NewCollection = () => {
  return (
    <div className="h-270 flex justify-center bg-[#FFFFFF] md:h-120">
      <div className="mt-8">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-[#34251F]">New Collection</h1>
        </div>
        <div className="flex justify-center">
          <p className="mt-3 px-10 text-xl">
            Fashion is more than clothing — it's your identity. Shop the latest{" "}
            <br />
            collections and create a style that reflects the real you.
          </p>
        </div>
        <div className="flex gap-5 mt-9 flex-col md:flex-row px-10 w-[100%]">
          <NewPageIMG img="https://images.pexels.com/photos/8183926/pexels-photo-8183926.jpeg" />
          <NewPageIMG img="https://images.pexels.com/photos/30048518/pexels-photo-30048518.jpeg" />
          <NewPageIMG img="https://images.pexels.com/photos/11039284/pexels-photo-11039284.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
