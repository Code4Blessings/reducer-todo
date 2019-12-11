import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { reducer, initialState } from './reducers/todoReducer'
import './App.css';

function App() {
  const ADD_TODO = 'ADD_TODO';
  const [state, dispatch] = useReducer(initialState, reducer)
  console.log(state)
  //const [todos, setTodos] = useState([]);

  const addToDo = task => {
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    dispatch({type: ADD_TODO, payload: newToDo});
  }

  const toggleComplete = id => {
    dispatch({ type: 'COMPLETED_TODO', payload: id});
  }

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODO"})
  }

  return (
    <div className="App">
       <div className="header">
           <h2>Welcome To Your Todo App!</h2>
            <TodoForm 
            addToDo={addToDo} />
        </div>
        <TodoList 
        state={state} 
        toggleComplete={toggleComplete} 
        clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
