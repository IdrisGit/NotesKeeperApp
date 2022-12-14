import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const Note = ({id, title, content, handleDeleteNote,updateNote}) => {

    const[note, setNote] = useState({
        title: title,
        content: content,
        id: id
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
            setIsEdit(false)
        }
    }

    return(
        <div>
        {
            !isEdit &&
                <div className="note">
                    <h2 className='note-title'>{title}</h2>
                        <p className='note-content'>{content}</p>
                        <div className='note-footer'>
                            <button className='note-button-edit' onClick={canEdit}>Edit</button>
                            <MdDelete onClick={() => handleDeleteNote(id)}  className='delete-button' size='1.6em' />
                        </div>
                </div>
        }

        {
            isEdit &&
            <div className="note-edit">
                <h2 className='note-title'>{title}</h2>
                <textarea className='note-content-edit' value={note.content} name = 'content' onChange={handleChange} rows = '4'>{content}</textarea>
                    <div className='note-footer'>
                     <button className='note-button-save' onClick={editNote}>Save</button>
                </div>
            </div>
        }
        </div>
)

};

export default Note;