import express from "express";
import { databaseBooks } from "../database.js";

const router = express.Router();

router.get("/books", (req, res) => {
  res.send(databaseBooks);
});

router.post("/addbook", (req, res) => {
  const book = req.body;
  databaseBooks.push(book);
  res.send(databaseBooks);
});

export default router;
