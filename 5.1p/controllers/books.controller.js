const booksService = require('../services/books.service');

const getAllBooks = (req, res) => {
  const books = booksService.getAllBooks();

  res.json({
    data: books
  });
};

const getBookById = (req, res) => {
  const book = booksService.getBookById(req.params.id);

  res.json({
    data: book
  });
};

module.exports = {
  getAllBooks,
  getBookById
};