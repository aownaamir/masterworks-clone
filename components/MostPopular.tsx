import { popularList } from "@/utils";
import Image from "next/image";

const MostPopular = () => {
  return (
    <section className="w-full px-4 py-5 lg:px-14">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Most Popular</h1>
        <h1 className="text-gray-400 font-bold">&lt; &nbsp; &gt;</h1>
      </div>
      <hr className="h-[50%] border-[0.01rem] my-3.5"></hr>

      <div className="w-full flex justify-between lg:flex-row flex-col">
        {popularList.map((item, i) => (
          <div key={i} className="lg:w-[265px] w-[100%] py-4">
            <div className="w-full h-[170px] overflow-hidden rounded-lg shadow-md mb-1">
              <Image
                src={item.img}
                alt="product"
                className="w-full rounded-lg"
              />
            </div>
            <h1 className="text-blue-900">{item.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
