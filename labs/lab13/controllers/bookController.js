const Book = require('../models/book');

exports.save = (req, res, next) => {
    console.log(req.body);
    const addedBook = new Book(req.body.title, req.body.isbn, req.body.publishedDate, req.body.authors);
    addedBook.save();
    res.status(201).json(addedBook);
};

exports.getAll = (req, res, next) => {
    const allBooks = Book.getAll();
    res.status(200).json(allBooks);
};

exports.deleteById = (req, res, next) => {
    const deletedBook = Book.deleteById(req.params.bookId);
    res.json(deletedBook);
};

exports.edit = (req, res) => {
    const editedBook = new Book(req.params.bookId, req.body.title, req.body.isbn, req.body.publishedDate, req.body.authors);
    editedBook.edit();
    res.json(editedBook);
};
