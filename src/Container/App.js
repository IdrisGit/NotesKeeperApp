import { useState } from "react";
import CreateNote from "../Components/CreateNote";
import NotesList from "../Components/NotesList";

function App() {

  const[notes, setNotes] = useState([])

  const addNewNote = (newNote) => {
    setNotes((prevNotes) => {return [...prevNotes, newNote]})
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note, index) => index !== id)
    setNotes(updatedNotes)
  }

  return (
    <div className="container">
        <CreateNote addNewNote ={addNewNote} />
        <NotesList notes={notes} handleDeleteNote = {deleteNote} />
    </div>
  );
};

export default App;
