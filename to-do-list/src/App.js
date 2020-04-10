import React, { useState } from "react";
import "./style.css";

//função que adiciona um item a nossa lista de tarefas.
const addItem = (list, setList, text) => {
  if(text !== '') {
  const id = Date.now();
  const item = {
    id,
    text,
    done: false
  };
    setList([...list, item])
  }
}

//função que faz a checagem de cada item se esta feito ou não 
const togggleItem = (id, list, setList) => {
  const item = list.find(i => i.id === id);
  const newItem = {...item, done: !item.done};
  const newList = list.map(i => (i.id === id ? newItem : i));
  setList(newList)
  console.log(newItem.done)
}
// função para ter acesso as fuçoes que estão fora da função app atravez do callback
const handlesubmit = (e, setNewItemText, callback) => {
  e.preventDefault();
  callback();
  setNewItemText("")
}

function App() {
  const [list, setList] = useState([]);
  const [newItemText, setNewItemText] = useState("")


  return (
    <div className="App">
      <form onSubmit={
        e => handlesubmit(e, setNewItemText,
        () => addItem(list, setList, newItemText))}>
      <input
        value={newItemText}
        onChange={e => setNewItemText(e.target.value)}
        placeholder="Enter your to do list"
        type="text"
      />
      </form>
      <div className="container-todo">
        <ul>
          {
          list.map (i => 
            <li
              className={i.done ? "isdone" : ""} 
              key={i.id}>
              <label>
                <input 
                  checked={i.done}
                  onChange={e => togggleItem(i.id, list, setList)}
                  type="checkbox"
                  key={i.id}/>
                {i.text}
              </label>
            </li>
          )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;