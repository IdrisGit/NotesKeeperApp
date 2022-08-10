import Note from "./Note"

const NotesList = ({notes}) => {
    return(
        <div className="notes-list">
            {
                notes.map((note) =>
                <Note
                    key = {note.id}
                    id = {note.id}
                    title = {note.title}
                    content = {note.content}
                />
                )
            }
        </div>
    )
};

export default NotesList;