import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:5000/api/notes";

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await fetch("http://localhost:5000/api/notes");
  const data = await response.json();
  return data;
});

export const addNote = createAsyncThunk("notes/addNote", async (note) => {
  const response = await fetch("http://localhost:5000/api/add", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: note,
  });
  const data = await response.json();
  return data;
});

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async (index) => {
    const response = await fetch("http://localhost:5000/api/delete", {
      method: "DELETE",
      headers: { "Content-Type": "text/plain" },
      body: index.toString(),
    });
    const data = await response.json();
    return data;
  }
);

const noteSlice = createSlice({
  name: "notes",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

export default noteSlice.reducer;
