import express from "express";
import booksRoutes from "./routes/booksRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors";

const port = 5000;

const app = express();
// app.use(express.json());
app.use(express.text()); // When work with note form

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use("/api", notesRoutes);
app.use("/api", booksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
