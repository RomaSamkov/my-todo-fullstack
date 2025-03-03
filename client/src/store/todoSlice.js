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
    removeTodo: (state, action) => {
      //   state.splice(action.payload, 1);
      //   localStorage.setItem("todos", JSON.stringify(state));
      const newState = state.filter((_, index) => index !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
