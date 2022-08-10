import { useState } from "react";
import {IoIosAdd} from 'react-icons/io'
import { nanoid } from 'nanoid'

const CreateNote = ({addNewNote}) => {

    const[note, setNote] = useState({
        id: nanoid(),
        title: "",
        content:""
    })

    const handleChange = (e) => {
        const {name,  value} = e.target
        setNote((preValue) => {return {
            ...preValue,
            [name] : value} 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(note.content.trim().length > 0) {
            addNewNote(note)
            setNote({
                title: '',
                content: ''
            })
        }
    }

    return(
        <div className="create-note">
                <input
                className="title"
                value={note.title}
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                />
                <p>
                    <textarea
                    className="content"
                    value={note.content}
                    name="content"
                    placeholder="Take a note..."
                    onChange={handleChange}
                    >   
                    </textarea>
                </p>
                <button className="add-button" onClick={handleSubmit}>
                    <IoIosAdd size={35} />
                </button>
        </div>
    )
};

export default CreateNote;