import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../store/todoSlice";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: Date.now(),
    text: "",
    isCompleted: false,
  });
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //   const [allTodos, setAlltodos] = useState(["Film", "App", "Music"]);

  const addNewTodo = (e) => {
    e.preventDefault();
    if (todo.text.trim() === "") return;
    // setAlltodos([...allTodos, todo.text]);
    dispatch(addTodo(todo.text));
    setTodo({ text: "", isCompleted: false });
  };

  return (
    <div className="flex flex-col gap-6">
      <form className="flex items-center gap-2">
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo.text}
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
          className="border rounded-2xl"
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </form>
      <ol className="flex flex-col justify-items-center border rounded-3xl p-2 gap-2">
        <h2>Todo list:</h2>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center px-2">
            <span>{todo}</span>
            <button onClick={() => dispatch(removeTodo(index))}>
              Remove Todo
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoForm;
