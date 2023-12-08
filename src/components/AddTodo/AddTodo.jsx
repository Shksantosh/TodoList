import { useContext, useState } from "react"
import TodotDispatchContex from "../../context/TodoDispatchContex"

function AddTodo() {

    const [inputText, setInputText] = useState('')
    const {dispatch} = useContext(TodotDispatchContex)
    return (
        <div>

            <input type="text"
            value={inputText}
                placeholder="Add your next todo.." 
                onChange={e => setInputText(e.target.value)}
                />
            <button onClick={() => {
                dispatch({type: 'add_todo', payload: {todoText: inputText}})
                setInputText('')
            }}>Add</button>
        </div>
    )
}

export default AddTodo