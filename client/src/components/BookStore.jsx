import { useState } from "react";

const BookStore = () => {
  const [book, setBook] = useState({ author: "", title: "" });
  const [allBooks, setAllBooks] = useState([]);

  const addBook = (e) => {
    e.preventDefault();
    if (book.author.trim() === "" || book.title.trim() === "") return;
    setAllBooks((prevBooks) => [...prevBooks, book]);
    setBook({ author: "", title: "" });
    console.log(book);
  };
  return (
    <div className="">
      <form className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <label htmlFor="note">Author:</label>
          <input
            id="author"
            name="author"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            className="border rounded-2xl p-2"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="note">Title:</label>
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
