const Book = require("../Models/books.models");

const seedBooks = async () => {
  try {
    // Clear existing books
    await Book.deleteMany();

    // Sample books data
    const books = [
      {
        bookTitle: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        publishedYear: 1925,
        price: 15.99,
        category: "Fiction",
        imageUrl:
          "https://m.media-amazon.com/images/I/81uot7BFoOL._UF1000,1000_QL80_.jpg",
        bookDescription:
          "A novel set in the Roaring Twenties about the enigmatic Jay Gatsby.",
        bookPDFUrl: "https://example.com/pdfs/great-gatsby.pdf",
      },
      {
        bookTitle: "1984",
        authorName: "George Orwell",
        publishedYear: 1949,
        price: 12.99,
        category: "Dystopian",
        imageUrl:
          "https://miro.medium.com/v2/resize:fit:800/1*g8s4n-puPV3y-F2b7ilJ_A.jpeg",
        bookDescription:
          "A dystopian novel exploring the dangers of totalitarianism.",
        bookPDFUrl: "https://example.com/pdfs/1984.pdf",
      },
      {
        bookTitle: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        publishedYear: 1960,
        price: 10.99,
        category: "Classic",
        imageUrl:
          "https://m.media-amazon.com/images/I/811NqsxadrS._AC_UF1000,1000_QL80_.jpg",
        bookDescription: "A story of racial injustice in the American South.",
        bookPDFUrl: "https://example.com/pdfs/to-kill-a-mockingbird.pdf",
      },
    ];

    // Insert books into the database
    await Book.insertMany(books);

    console.log("Books have been seeded successfully");
  } catch (error) {
    console.error("Error seeding books:", error);
    process.exit(1);
  }
};

module.exports = seedBooks;
