import React from "react";
import AboutUsCards from "./AboutUsCards";

const AboutUs = () => {
  return (
    <div className="h-162 w-full px-10 py-5">
      <h1 className="text-4xl font-bold md:flex md:justify-center">What People Say About Us</h1>
      <p className="text-xl mt-4 ">
        From casual wear to evening elegance, our customers trust us for premium
        quality, trendy styles, and a perfect fit that boosts confidence in
        every outfit.
      </p>
      <div id="testi" className="flex overflow-x-auto gap-5">
        <AboutUsCards
          name="Aarushi Mehta"
          heading="Premium quality and absolutely gorgeous!"
          para="I bought a premium organza kurti set and the quality blew me away! The fabric is rich, lightweight, and incredibly comfortable on the skin. The embroidery detail is stunning and looks designer-made. I felt so graceful and confident wearing it — definitely one of my favorite outfits ever. Highly recommended for fashion lovers!"
          about="Fashion Blogger & Style Curator"
          img="https://cdn.pixabay.com/photo/2023/11/10/02/30/woman-8378634_1280.jpg"
        />
        <AboutUsCards
          name="Riya Sharma"
          heading="The fit and fabric are just perfect!"
          para="I ordered a satin wrap dress and I’m in love! The fabric feels buttery smooth and drapes beautifully on the body. The stitching and finishing are absolutely seamless. It gives such an elegant and effortless look — perfect for brunch dates and evening outings. If you adore premium fashion with a classy vibe, this dress is a must-have!"
          about="Lifestyle Influencer"
          img="https://cdn.pixabay.com/photo/2022/01/05/06/43/woman-6916475_1280.jpg"
        />
        <AboutUsCards
          name="Manya Kapoor"
          about='Fashion Designer'
          heading="Stylish, trendy and so comfortable!"
          para="Purchased a velvet blazer co-ord and it exceeded expectations! The texture feels plush and luxurious, and the fit is absolutely flattering. The material has a beautiful sheen and feels premium like high-end brands. It’s stylish, classy, and perfect for special events. Truly a statement piece worth every single rupee!"
          img="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
        />
        <AboutUsCards
          name="Sana Fatima"
          heading="Elegant and premium feel, totally worth it!"
          para="I got a chiffon ruffle maxi dress and it’s so dreamy! The fabric is soft, flowy, and super comfortable. The design silhouette details and silhouette create a very classy and feminine look. It fits perfectly and moves so beautifully with every step. If you want silhouette elegant modern fashion, this dress will definitely win your heart!"
          about="Founder, StyleStudio"
          img="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_1280.jpg"
        />
      </div>
    </div>
  );
};

export default AboutUs;
