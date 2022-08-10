import { useState } from "react";
import CreateNote from "../Components/CreateNote";
import NotesList from "../Components/NotesList";

function App() {

  const[notes, setNotes] = useState([])

  const addNewNote = (newNote) => {
    setNotes((prevNotes) => {return [...prevNotes, newNote]})
  }

  return (
    <div className="container">
        <CreateNote addNewNote ={addNewNote} />
        <NotesList notes={notes} />
    </div>
  );
};

export default App;
