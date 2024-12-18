import React from "react";
import { useState } from "react";
import BannerSwiper from "./BannerSwiper/BannerSwiper";
import { Link } from "react-router-dom";

function Banner() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="px-4 lg:px-40 bg-teal-100 flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
          {/* left side */}
          <div className="md:w-1/2 h-full space-y-12">
            <h2 className="text-6xl font-bold leading-snug text-black">
              Buy and Sell Your Books{" "}
              <span className="text-blue-700">For The Best Prices</span>{" "}
            </h2>
            <p className="md:w-4/5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, nunc sit amet varius fermentum, turpis mi volutpat
              tellus, id sollicitudin nunc odio vel dolor.{" "}
            </p>
            <div className="flex items-center">
              <input
                type="search"
                name="search"
                id="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search a book"
                className="py-2 px-2 rounded-l-sm outline-none"
              />
              <Link to={`/all-books/search/${searchValue}`}>
                {" "}
                {/* Updated link */}
                <button className="bg-blue-700 text-white px-6 font-medium py-2  rounded-r-lg hover:bg-black transition-all ease-in duration-200">
                  Search
                </button>
              </Link>
            </div>
          </div>

          {/* right side */}
          <div className=" ml-10">
            <BannerSwiper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
