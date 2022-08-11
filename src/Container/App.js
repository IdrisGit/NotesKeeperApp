import { useState } from "react";
import { nanoid } from 'nanoid'
import CreateNote from "../Components/CreateNote";
import NotesList from "../Components/NotesList";
import Pagination from "../Components/Pagination";

function App() {

  const[notes, setNotes] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [notesPerPage] = useState(6)

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

  //Get Current Notes
  const indexLastNote = currentPage * notesPerPage
  const indexFirstNote = indexLastNote - notesPerPage
  const currentNotes = notes.slice(indexFirstNote, indexLastNote)

  const paginate = (pgNo) => {
    setCurrentPage(pgNo)
  }

  return (
    <div className="container">
        <CreateNote addNewNote ={addNewNote} />
        <NotesList notes={currentNotes} handleDeleteNote = {deleteNote} updateNote = {updateNote} />
        <Pagination notesPerPage={notesPerPage} totalNotes = {notes.length} paginate = {paginate} currentPage = {currentPage} />
    </div>
  );
};

export default App;
