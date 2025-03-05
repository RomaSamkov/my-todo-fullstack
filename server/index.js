import express from "express";
import cors from "cors";
import { database } from "./database.js";

const port = 5000;

const app = express();
app.use(express.text());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/notes", (req, res) => {
  res.send(database);
});

app.use("/add", (req, res) => {
  const note = req.body;
  database.push(note);
  res.send(database);
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
