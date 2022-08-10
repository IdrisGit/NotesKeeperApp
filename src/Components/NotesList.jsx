import Note from "./Note"

const NotesList = ({notes, handleDeleteNote, updateNote}) => {
    return(
        <div className="notes-list">
            {
                notes.map((note, index) =>
                <Note
                    key = {index}
                    id = {note.id}
                    title = {note.title}
                    content = {note.content}
                    handleDeleteNote = {handleDeleteNote}
                    updateNote = {updateNote}
                />
                )
            }
        </div>
    )
};

export default NotesList;