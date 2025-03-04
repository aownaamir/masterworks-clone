import { graphData, metrices } from "@/utils";
import Image from "next/image";
import React from "react";

const Metrics = () => {
  return (
    <section className="w-full px-4 py-5 lg:px-14">
      <h1 className="font-bold text-2xl">Artist Metrices</h1>
      <hr className="h-[50%] border-[0.01rem] my-2"></hr>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 my-5">
        {metrices.map((item, i) => (
          <div
            key={item.id}
            className="w-full lg:w-[350px] p-3 border border-gray-400 rounded-md lg:rounded-xl"
          >
            <h3 className="font-bold text-gray-500">{item.title}</h3>
            <p className="font-bold">
              {item.id !== 2 ? "$" : ""}
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        {graphData.map((item) => (
          <div key={item.id} className="w-full lg:w-[350px] flex flex-col mt-5">
            <div className="flex justify-between">
              <h1 className="font-bold text-md mb-4">{item.title}</h1>
              {item.id === 3 ? (
                <>
                  <span>🟦 Sold</span>
                  <span>🟥 Unsold</span>
                </>
              ) : (
                ""
              )}
              <span>❔</span>
            </div>
            <div>
              <Image src={item.img} alt="graph" width={350} height={100} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;
