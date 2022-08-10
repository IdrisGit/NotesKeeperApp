import Note from "./Note"

const NotesList = ({notes, handleDeleteNote}) => {
    return(
        <div className="notes-list">
            {
                notes.map((note, index) =>
                <Note
                    key = {index}
                    id = {index}
                    title = {note.title}
                    content = {note.content}
                    handleDeleteNote = {handleDeleteNote}
                />
                )
            }
        </div>
    )
};

export default NotesList;