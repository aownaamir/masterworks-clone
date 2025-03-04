import { repeatedSales } from "@/utils";
import Image from "next/image";

const RepeatSales = () => {
  return (
    <section className="w-full px-4 py-5 lg:px-14">
      <h1 className="font-bold text-lg lg:text-2xl">
        Repeat-Sale Pairs: Artworks Sold Twice ❔
      </h1>
      <hr className="h-[50%] border-[0.01rem] my-3.5"></hr>

      <div className="flex flex-col lg:grid grid-cols-4 gap-8">
        {repeatedSales.map((item) => (
          <div key={item.id} className="bg-grey">
            <div className="w-full h-40 overflow-hidden rounded-md">
              <Image
                src={item.img}
                alt="img"
                width={100}
                height={100}
                className="w-full rounded-md"
              />
            </div>
            <div className="flex justify-between border-b-[1.3px] text-xs p-1.5">
              <span>Purchase Price</span>
              <span>${item.purchasePrice}</span>
            </div>
            <div className="flex justify-between border-b-[1.3px] text-xs p-1.5">
              <span>Sale Price</span>
              <span>${item.salePrice}</span>
            </div>
            <div className="flex justify-between border-b-[1.3px] text-xs p-1.5">
              <span>Gross Appreciation</span>
              <span>{item.grossAppreciation}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RepeatSales;
