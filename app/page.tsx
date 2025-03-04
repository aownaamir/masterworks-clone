import Hero from "@/components/Hero";
import MostPopular from "@/components/MostPopular";
import Navbar from "@/components/Navbar";
import MomentumData from "@/components/MomentumData";
import Image from "next/image";
import Metrics from "@/components/Metrics";
import RepeatSales from "@/components/RepeatSales";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MostPopular />
      <MomentumData />
      <Metrics />
      <RepeatSales />
    </div>
  );
}
