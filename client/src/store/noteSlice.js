import { createSlice } from "@reduxjs/toolkit";

const loadNotes = () => {
  const savedTodos = localStorage.getItem("notes");
  return savedTodos
    ? JSON.parse(savedTodos)
    : ["text storage 1", "Text - App", "Text - Music"];
};

const noteSlice = createSlice({
  name: "notes",
  initialState: loadNotes(),
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state));
    },
    deleteNote: (state, action) => {
      state.splice(action.payload, 1);
      localStorage.setItem("notes", JSON.stringify(state));
    },
  },
});

export const { addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
