import express from "express";
import booksRoutes from "./routes/booksRoutes.js";
import cors from "cors";
import { database } from "./database.js";

const port = 5000;

const app = express();
app.use(express.json());
// app.use(express.text()); // When work with note form

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/api/notes", (req, res) => {
  res.send(database);
});

app.use("/api/add", (req, res) => {
  const note = req.body;
  database.push(note);
  res.send(database);
});

app.use("/api/delete", (req, res) => {
  const index = req.body;
  database.splice(index, 1);
  res.send(database);
});

app.use("/api", booksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
