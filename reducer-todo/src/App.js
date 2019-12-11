import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = task => {
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    setTodos(
      [...todos, newToDo]
    );
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    );
  }

  const clearCompleted = () => {
    setTodos(
      todos.filter(task => !task.completed)
    )
  }

  return (
    <div className="App">
       <div className="header">
           <h2>Welcome To Your Todo App!</h2>
            <TodoForm 
            addToDo={addToDo} />
        </div>
        <TodoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
