import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({id, title, content, handleDeleteNote,updateNote}) => {

    const[note, setNote] = useState({
        title: title,
        content: content
    })

    const [isEdit, setIsEdit] = useState(false)

    const canEdit = () => {
        setIsEdit(true)
    }

    const handleChange = (e) => {
        const {name,  value} = e.target
        setNote((preValue) => {
            return {
            ...preValue,
            [name] : value
            } 
        })
    }

    const editNote = (e) => {
        e.preventDefault()
        if(note.content.trim().length > 0) {
            updateNote(note)
            setNote({
                title: title,
                content:content
            })
            setIsEdit(false)
        }
    }

    return(
        <div>
        {
            !isEdit &&
                <div className="note">
                    <h2 className='note-tile'>{title}</h2>
                        <p className='note-content'>{content}</p>
                        <div className='note-footer'>
                            <button onClick={canEdit}>Edit</button>
                            <MdDeleteForever onClick={() => handleDeleteNote(id)}  className='delete-button' size='1.3em' />
                        </div>
                </div>
        }

        {
            isEdit &&
            <div className="note">
                <h2 className='note-tile'>{title}</h2>
                <textarea className='note-content' value={note.content} name = 'content' onChange={handleChange}>{content}</textarea>
                    <div className='note-footer'>
                     <button onClick={editNote}>Save</button>
                    <MdDeleteForever onClick={() => handleDeleteNote(id)}  className='delete-button' size='1.3em' />
                </div>
            </div>
        }
        </div>
)

};

export default Note;