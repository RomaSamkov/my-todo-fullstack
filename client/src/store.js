import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./store/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
