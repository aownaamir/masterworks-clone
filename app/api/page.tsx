import axios from "axios";
import { JSDOM } from "jsdom";

const getDownloads = async () => {
  const res = await fetch(
    "https://www.udemy.com/course/machinelearning/?couponCode=ST16MT70224"
  );
  const html = await res.text();
  console.log("////////////////////////////");
  console.log("html", html);

  return <div>getDownloads</div>;
};

export default getDownloads;
