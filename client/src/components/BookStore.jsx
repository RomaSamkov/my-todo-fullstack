import { useEffect, useState } from "react";

const BookStore = () => {
  const [book, setBook] = useState({ author: "", title: "" });
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/books");
      const dataBooks = await response.json();
      setAllBooks(dataBooks);
    } catch (error) {
      console.error(error);
    }
  };

  const addBook = async (e) => {
    e.preventDefault();
    if (book.author.trim() === "" || book.title.trim() === "") return;

    try {
      const response = await fetch("http://localhost:5000/api/books/addbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      console.log("Статус відповіді сервера:", response.status);

      if (!response.ok) throw new Error("Failed to add book");

      // Оновлюємо список книг після додавання
      console.log("Книга успішно додана!");
      fetchBooks();
      setBook({ author: "", title: "" }); // Очищаємо поля
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };
  return (
    <div className="">
      <form className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            className="border rounded-2xl p-2"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            className="border rounded-2xl p-2"
          />
        </div>
        <button onClick={addBook}>Add Book</button>
      </form>
      <ul>
        {allBooks.map((b, i) => (
          <li key={i}>
            {b.author} - {b.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookStore;
