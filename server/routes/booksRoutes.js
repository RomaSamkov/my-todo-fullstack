import express from "express";
import { addBook, getBooks } from "../controllers/booksController.js";

const router = express.Router();

router.get("/books", getBooks);

router.post("/books/addbook", addBook);

export default router;
