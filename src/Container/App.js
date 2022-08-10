import { useState } from "react";
import { nanoid } from 'nanoid'
import CreateNote from "../Components/CreateNote";
import NotesList from "../Components/NotesList";

function App() {

  const[notes, setNotes] = useState([
  ])

  const addNewNote = (note) => {
    const newNote = {
      id : nanoid(),
      title: note.title,
      content: note.content
    }
    setNotes((prevNotes) => {return [...prevNotes, newNote]})
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id)
    setNotes(updatedNotes)
  }

  const updateNote = (note) =>{
   const updateNotes = notes.map((x) => {
    if(note.id === x.id){
      return ({...x, content:note.content})
    }
    return x
   })
   setNotes(updateNotes)
  }

  return (
    <div className="container">
        <CreateNote addNewNote ={addNewNote} />
        <NotesList notes={notes} handleDeleteNote = {deleteNote} updateNote = {updateNote} />
    </div>
  );
};

export default App;
