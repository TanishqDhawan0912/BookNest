const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "bookTitle": {
        type: String,
        required: true
    },
    "authorName": {
        type: String,
        required: true
    },
    "publishedYear": {
        type: Number,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    bookDescription: {
        type: String,
        required: true
    },
    bookPDFUrl: {   
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;