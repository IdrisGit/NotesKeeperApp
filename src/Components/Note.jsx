import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, title, content, handleDeleteNote}) => {
    return(
        <div className="note">
            <h2 className='note-tile'>{title}</h2>
                <p className='note-content'>{content}</p>
                <div className='note-footer'>
                    <button>Edit</button>
                    <MdDeleteForever onClick={() => handleDeleteNote(id)}  className='delete-button' size='1.3em' />
                </div>
        </div>
    )
};

export default Note;