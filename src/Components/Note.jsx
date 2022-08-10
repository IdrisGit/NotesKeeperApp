import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, title, content}) => {
    return(
        <div className="note">
            <h2 className='note-tile'>{title}</h2>
                <p className='note-content'>{content}</p>
                <div className='note-footer'>
                    <button>Edit</button>
                    <MdDeleteForever className='delete-button' size={25} />
                </div>
        </div>
    )
};

export default Note;