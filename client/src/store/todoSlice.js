import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : ["Film", "App", "Music"];
};

const todoSlice = createSlice({
  name: "todos",
  initialState: loadTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
