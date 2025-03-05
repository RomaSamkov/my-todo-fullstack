import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import HomePage from "./pages/HomePage";
import Logo from "./components/Logo";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoForm />} />
        <Route path="note" element={<NoteForm />} />
      </Routes>
    </>
  );
}

export default App;
