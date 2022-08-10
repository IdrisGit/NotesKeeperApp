import { useState } from "react";
import {IoIosAdd} from 'react-icons/io';

const CreateNote = ({addNewNote}) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const[note, setNote] = useState({
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
            setIsExpanded(false)
        }
    }

    const handleExpand = () => {
        setIsExpanded(true)
    }

    return(
        <div className="create-note">
            {isExpanded &&
                <input
                className="title"
                value={note.title}
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                />
            }
                <p>
                    <textarea
                    className="content"
                    value={note.content}
                    name="content"
                    placeholder="Take a note..."
                    onClick={handleExpand}
                    onChange={handleChange}
                    rows = {isExpanded ? 3 : 1}
                    >   
                    </textarea>
                </p>
                <button className="add-button" onClick={handleSubmit}>
                    <IoIosAdd size='35' />
                </button>
        </div>
    )
};

export default CreateNote;