import searchImg from "@/public/assets/images/search.png";
import Searchbar from "./Searchbar";
const Hero = () => {
  return (
    <section className="w-full px-4 py-5 lg:px-14">
      <div className="w-full flex flex-col  pt-1 lg:pt-20">
        <h1 className=" my-3 font-bold text-[3rem]">Price Database</h1>
        <p className="text-[1.4rem]">
          Masterworks has created the most comprehensive database to understand
          appreciation rate by artist market.
        </p>
        <Searchbar />
      </div>
    </section>
  );
};

export default Hero;
