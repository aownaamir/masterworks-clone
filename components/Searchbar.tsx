"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import React, { FormEvent, useState } from "react";

// const isValidAmazonProductURL = (url: string) => {
//   try {
//     const parsedURL = new URL(url);
//     const hostname = parsedURL.hostname;
//     // console.log(hostname);

//     if (
//       hostname.includes("masterworks.com") ||
//       hostname.includes("masterworks.") ||
//         hostname.endsWith("amazon")
//     ) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }
//   return false;
// };

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      //Scrape the product page.
      const product = await scrapeAndStoreProduct(searchPrompt);
      console.log(product);
      setSearchPrompt("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder={`🔍 Search for an artist`}
        className="w-[100%] p-3 py-4 my-4 border-[0.5px] border-gray-400 m-auto shadow-lg text-lg"
      />
    </form>
  );
};

export default Searchbar;
