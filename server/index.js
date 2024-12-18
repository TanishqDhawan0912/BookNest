const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const connectDB = require("./db");
const seedBooks = require("./seeds/books");
const Book = require("./Models/books.models");

// middleware
app.use(cors());
app.use(express.json());

// connect to database
connectDB().then(() => {
  seedBooks(); // seeding books
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/upload-book", async (req, res) => {
  const data = req.body;
  const result = await Book.create(data);
  res.send(result);
});

app.get("/all-books", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  res.send(book);
});

app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await Book.updateOne(
    { _id: id },
    {
      $set: data,
    }
  );
  res.send(result);
});

app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Book.deleteOne({ _id: id });
  res.send(result);
});

app.get("/all-books/search/:search", async (req, res) => {
  const query = req.params.search;  // Use the search parameter from the URL
  // console.log(query.toString());
  const books = await Book.find({
    $or: [
      { bookTitle: { $regex: query, $options: "i" } },
      { authorName: { $regex: query, $options: "i" } },
      { category: { $regex: query, $options: "i" } },
    ],
  });
  res.send(books);  // Send the result as JSON
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
