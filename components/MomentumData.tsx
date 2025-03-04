import { artists } from "@/utils";
import Image from "next/image";
import React from "react";

const MomentumData = () => {
  return (
    <section className="w-full px-4 py-5 lg:px-14">
      <div className="flex lg:flex-row flex-col justify-between">
        <h1 className="font-bold text-3xl">Artist Momentum Data</h1>
        <div className="flex gap-3 items-center">
          <span className="text-gray-400 text-[0.9rem] ">Select Artist</span>
          <select className="bg-gray-100 rounded-md p-2 border-[0.1px] border-gray-600 shadow-md">
            {artists.map((item, i) => (
              <option key={i} value={i} className="uppercase">
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between py-5 ">
        <div className="flex flex-col lg:w-[650px] w-full gap-5">
          <h1 className="text-xl uppercase font-bold">KEITH HARING</h1>
          <p>
            Keith Haring (b. 1958, Pennsylvania - d. 1990, New York) rose to
            international fame in the 1980s for his bold linear figure drawings
            and is among the most famous late-twentieth-century artists. Haring
            immersed himself in the New York downto ...
          </p>
          <button className="w-full lg:w-[350px] lg:mt-[30px] p-3 text-white bg-blue-600 rounded-md">
            See more artist data ➡
          </button>
        </div>
        <div className="lg:w-[310px] w-[80%] overflow-hidden mt-8 m-auto lg:m-0">
          <Image
            src="/assets/images/p4.png"
            alt="photo"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MomentumData;
