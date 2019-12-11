import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo}
                    completed={todo.completed}
                    toggleComplete={props.toggleComplete}
                    clearCompleted={props.clearCompleted} />
            ))}
             <button onClick={() => props.clearCompleted()}>Clear Completed Todo</button>
        </div>
    )
}

export default TodoList;