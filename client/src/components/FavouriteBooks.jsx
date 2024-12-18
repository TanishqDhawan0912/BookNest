import React from "react";
import { useEffect, useState } from "react";
import FavouriteBooksSwiper from "./FavouriteBooksSwiper/FavouriteBooksSwiper";

function FavouriteBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <FavouriteBooksSwiper books={books} headline="Best Selling Books" />
    </>
  );
}

export default FavouriteBooks;
