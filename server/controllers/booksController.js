import { databaseBooks } from "../database.js";

export const getBooks = async (req, res) => {
  res.send(databaseBooks);
};

export const addBook = async (req, res) => {
  const book = req.body;
  databaseBooks.push(book);
  res.send(databaseBooks);
};
