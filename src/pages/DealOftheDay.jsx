import React, { useEffect, useState } from "react";

const DealOftheDay = () => {
  const targetDate = new Date("2025-12-31T00:00:00").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days: d, hours: h, minutes: m, seconds: s });

      if (diff <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#EEDDCC] h-220 5 px-10 py-5 items-center justify-between md:flex  md:h-full md:w-[100%]">
      <div className="max-w-lg">
        <h1 className="text-[#34291F] text-5xl font-bold">Deal of the day</h1>
        <p className="mt-5 text-xl text-[#34291F] leading-relaxed">
          Every stitch, every fabric, and every design is curated with purpose —
          to empower you, elevate your confidence, and help you shine
          effortlessly in every moment.
        </p>
        <div className="flex gap-5 mt-5">
          {[
            { label: "Day", value: time.days },
            { label: "Hour", value: time.hours },
            { label: "Minute", value: time.minutes },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white px-6 py-5 rounded shadow-md text-center"
            >
              <h2 className="text-3xl font-bold text-[#34291F]">
                {String(item.value).padStart(2, "0")}
              </h2>
              <p className="text-[#34291F]">{item.label}</p>
            </div>
          ))}
        </div>

        <button className="bg-[#34291F] active:scale-95 text-white px-13 py-4 mt-6 font-semibold">
          SHOP NOW
        </button>
      </div>

      <div className=" md:h-full md:w-[50%]">
        <img
          className="h-110 w-full object-cover mt-5 rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default DealOftheDay;
