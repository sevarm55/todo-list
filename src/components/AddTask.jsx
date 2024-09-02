import axios from "axios"
import { useState } from "react"

export const AddTask = ({onAdd}) => {

    const [error, setError] = useState('')
    const [text, setText] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        if(!text.trim()) {
            return setError("This field is required")
        }
        setError('')
        setText('')
        axios
        .post("http://localhost:3004/tasks", {text, status: "unstarted"})
        .then(res => {
            onAdd(res.data)
        })
        
    }
    
    
    return <div>
        <p>AddTask</p>
        {error && <p style={{color: "red"}}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button>+</button>
        </form>
    </div>
}