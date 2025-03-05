import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./store/todoSlice";
import notesReducer from "./store/noteSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    notes: notesReducer,
  },
});
