import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const [book, setBook] = useState(null);
  const { id, search } = useParams(); // Capture both 'id' and 'search' from URL params

  useEffect(() => {
    let url;

    if (id) {
      // Fetch book details by id
      url = `http://localhost:3000/book/${id}`;
    } else if (search) {
      // Fetch books based on search query
      url = `http://localhost:3000/all-books/search/${search}`;
    }

    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBook(data);
        });
    }
  }, [id, search]); // Re-fetch if 'id' or 'search' changes

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-teal-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-teal-200 to-blue-300 min-h-screen py-10 flex justify-center ">
      <div className="w-full mx-10  px-6 my-10">
        {Array.isArray(book) ? (
          book.map((bookItem) => (
            <div
              key={bookItem._id}
              className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                <img
                  className="w-[400p] h-[600px] object-cover rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300"
                  src={bookItem.imageUrl}
                  alt={bookItem.bookTitle}
                />
                <div className="flex flex-col space-y-4">
                  <h2 className="text-6xl font-semibold text-gray-900 tracking-wide">
                    {bookItem.bookTitle}
                  </h2>
                  <p className="text-lg text-gray-600 font-medium">
                    {bookItem.authorName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {bookItem.publishedYear}
                  </p>
                  <p className="text-xl font-bold text-teal-600">
                    {bookItem.price}
                  </p>
                  <p className="text-sm text-gray-500 uppercase font-semibold tracking-wide">
                    {bookItem.category}
                  </p>
                  <p className="text-lg text-gray-700">
                    {bookItem.bookDescription}
                  </p>
                  <a
                    href={bookItem.bookPDFUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-teal-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md transform hover:bg-teal-600 hover:scale-105 transition-all duration-300"
                  >
                    Read PDF
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6">
            <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
              <img
                className="w-48 h-72 object-cover rounded-xl shadow-lg transform hover:scale-110 transition-all duration-300"
                src={book.imageUrl}
                alt={book.bookTitle}
              />
              <div className="flex flex-col space-y-4">
                <h2 className="text-4xl font-semibold text-gray-900 tracking-wide">
                  {book.bookTitle}
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                  {book.authorName}
                </p>
                <p className="text-sm text-gray-500">{book.publishedYear}</p>
                <p className="text-xl font-bold text-teal-600">{book.price}</p>
                <p className="text-sm text-gray-500 uppercase font-semibold tracking-wide">
                  {book.category}
                </p>
                <p className="text-lg text-gray-700">{book.bookDescription}</p>
                <a
                  href={book.bookPDFUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-teal-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md transform hover:bg-teal-600 hover:scale-105 transition-all duration-300"
                >
                  Read PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
