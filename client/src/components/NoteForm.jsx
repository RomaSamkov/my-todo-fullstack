import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "../store/noteSlice";

const NoteForm = () => {
  const [note, setNote] = useState("");
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

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
    </div>
  );
};

export default NoteForm;
