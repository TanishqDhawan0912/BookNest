import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./FavouriteBooksSwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaCartShopping } from "react-icons/fa6";

function FavouriteBooksSwiper({ books, headline }) {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center mb-4">
          <h1 className="text-7xl font-extrabold text-black-500 my-5">
            {headline}
          </h1>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {books.map((book, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-3/4 h-3/4 relative flex items-center justify-around bg-teal-100 text-gray-800 rounded-lg shadow-lg  hover:shadow-2xl transition-all">
                    <Link
                      to={`/book/${book._id}`}> 
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-amber-500 p-1 block">
                          <img
                            src={book.imageUrl}
                            alt={book.bookTitle}
                            className="block w-[300px] h-[350px] rounded-t-lg "
                          />
                        </div>
                        <div className="flex justify-center w-[300px] bg-blue-600 p-2  hover:bg-black rounded-b-lg ">
                          <FaCartShopping className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </Link>
                    <div className="w-1/2 pl-6 text-center">
                      <h1 className="text-4xl font-bold text-indigo-600 mb-3">
                        {book.bookTitle}
                      </h1>
                      <p className="text-lg font-medium text-teal-500 mb-2">
                        by {book.authorName}
                      </p>
                      <p className="text-sm italic text-gray-600 mb-4">
                        Published: {book.publishedYear}
                      </p>
                      <a
                        href={book.bookPDFUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 transition"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default FavouriteBooksSwiper;
