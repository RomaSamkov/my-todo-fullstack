import { database } from "../database.js";

export const getNotes = async (req, res) => {
  res.send(database);
};

export const addNote = async (req, res) => {
  const note = req.body;
  database.push(note);
  res.send(database);
};

export const deleteNote = async (req, res) => {
  const index = req.body;
  database.splice(index, 1);
  res.send(database);
};
