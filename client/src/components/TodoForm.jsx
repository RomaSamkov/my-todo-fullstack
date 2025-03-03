import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";

const TodoForm = () => {
  const [todo, setTodo] = useState({ text: "", isCompleted: false });
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
    <div>
      <form>
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={todo.text}
          onChange={(e) => setTodo({ ...todo, text: e.target.value })}
        />
        <button onClick={addNewTodo}>Add Todo</button>
      </form>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  );
};

export default TodoForm;
