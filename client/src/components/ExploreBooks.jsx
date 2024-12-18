import React from "react";
import { Link } from "react-router-dom";

function ExploreBooks() {
  return (
    <>
      <div className="px-4 lg:px-40  flex items-center">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
          {/* left side */}
          <div className="w-1/2 ml-4 bg-slate-500 p-6 ">
            <img
              src="https://www.bookgeeks.in/wp-content/uploads/2020/06/Best-Indian-Books-by-Indian-Authors-1.jpg"
              alt=""
              className="h-[550px] w-[500px] object-cover rounded-lg"
            />
          </div>

          {/* right side */}
          <div className="md:w-1/2 h-full space-y-12 ml-28">
            <h2 className="text-5xl font-bold leading-snug text-black">
              Find Your Favourite <br />
              <span className="text-blue-700"> Books Here !</span>{" "}
            </h2>
            <p className="text-xl font-normal leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, nunc sit amet varius fermentum, turpis mi volutpat
              tellus, id sollicitudin nunc odio vel dolor.{" "}
            </p>
            <div className="flex gap-16">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">800+</h1>
                <p className="text-slate-400 font-semibold">Booking Listing</p>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">550+</h1>
                <p className="text-slate-400 font-semibold">Registered Users</p>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold">1200+</h1>
                <p className="text-slate-400 font-semibold">PDF Downloads</p>
              </div>
            </div>
            <Link to="/shop">
              <button className="mt-9 bg-blue-700 text-white px-9 font-medium py-3  rounded-lg hover:bg-black transition-all ease-in duration-200">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreBooks;
