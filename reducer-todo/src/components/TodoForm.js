import React, { useState } from 'react';


const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = event => {
        setNewTodo({ 
            newTodo: event.target.value 
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addToDo(newTodo);
        setNewTodo({
            newTodo: ""
        })
    }

    return (
        <form>
             <label htmlFor="task">Task:
                   <input 
                   type="text" 
                   placeholder="task"
                   value={newTodo} 
                   onChange={handleChange}
                    />
                </label>
                <button type="submit">ADD</button>
        </form>
    );
}

export default TodoForm;