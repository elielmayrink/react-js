import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './reduxFlow/reduces/todos/actions-creators'
import './App.css';

function App({ todos, handleTodo, toggleTodoItem }) {
  return (
    <div className="App">
      <form onSubmit={handleTodo}>
        <input type="text" name="todo" autoFocus />
      </form>
      {console.log(todos)}
      <ul style={{listStyle: "none"}}>
        {todos.map((todo) =>(
          <li key={todo.id} className={todo.isDone ? "done" : ""}>
            <label>
              <input 
                type="checkbox" 
                id={todo.id} 
                checked={todo.isDone}
                onChange={() =>toggleTodoItem(todo.id)} />{todo.text}</label></li>
        ))}
      </ul>
      <div>
        <button>Done</button>  | <button>todos</button>  |  <button> a fazer</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todos: state,
})
const mapDispatchToProps = (dispatch) => ({
  handleTodo: (e) => {
    e.preventDefault()
      dispatch (addTodo(e.target.todo.value))
      e.target.todo.value = ""
  },
  toggleTodoItem: (id) => {
    dispatch(toggleTodo(id))
  } 
})
export default connect(mapStateToProps, mapDispatchToProps) (App);
