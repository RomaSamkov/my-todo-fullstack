import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "../store/noteSlice";
import axios from "axios";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const [addfetch, setAddfetch] = useState("");
  const [fetchedNotes, setFetchedNotes] = useState([]);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:5000/notes");
    setFetchedNotes(response.data);
  };

  const addFetchNote = async (e) => {
    e.preventDefault();
    console.log("Click");

    const response = await axios.post("http://localhost:5000/add", addfetch, {
      headers: { "Content-Type": "text/plain" },
    });
    console.log("🚀 ~ addFetchNote ~ response:", response.data);
    setAddfetch("");
    fetchNotes();
  };

  const addNewNote = (e) => {
    e.preventDefault();
    if (note.trim() === "") return;
    dispatch(addNote(note));
    setNote("");
  };
  return (
    <div className="flex flex-col gap-6">
      <form className="flex items-center gap-2">
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border rounded-2xl"
        />
        <button onClick={addNewNote}>Add Note</button>
      </form>
      <div>
        <h2>Notes:</h2>
        <ol>
          {notes.map((note, index) => (
            <li key={index}>
              <span>{note}</span>
              <button onClick={() => dispatch(deleteNote(index))}>
                delete
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <button onClick={fetchNotes}>Fetch Button</button>
        <form className="flex items-center gap-2">
          <label htmlFor="fetchnote">Note</label>
          <textarea
            id="fetchnote"
            name="fetchnote"
            value={addfetch}
            onChange={(e) => setAddfetch(e.target.value)}
            className="border rounded-2xl"
          />
          <button onClick={addFetchNote}>Add Note</button>
        </form>
        <div>
          {fetchedNotes.map((fetchNote, index) => (
            <li key={index}>{fetchNote}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
