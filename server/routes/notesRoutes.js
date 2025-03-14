import express from "express";
import {
  addNote,
  deleteNote,
  getNotes,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/add", addNote);
router.delete("/delete", deleteNote);

export default router;
