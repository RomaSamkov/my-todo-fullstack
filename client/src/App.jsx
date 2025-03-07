import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import HomePage from "./pages/HomePage";
import Logo from "./components/Logo";
import NoteForm from "./components/NoteForm";
import BookStore from "./components/BookStore";

function App() {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoForm />} />
        <Route path="/note" element={<NoteForm />} />
        <Route path="/book" element={<BookStore />} />
      </Routes>
    </>
  );
}

export default App;
