import React, { useState } from "react";
import "./style.css";

//função que adiciona um item a nossa lista de tarefas.
const addItem = (list, setList, text) => {
  if(text !== '') {
  const id = Date.now();
  const item = {
    id,
    text,
    done: false,
    descrInput: false,
    description: ''
  };
    setList([...list, item])
  }
}

//função que faz a checagem de cada item se esta feito ou não 
const togggleItem = (id, list, setList) => {
  const item = list.find(i => i.id === id);
  const newItem = {...item, done: !item.done};
  const newList = list.map(i => (i.id === id ? newItem : i));
  setList(newList);
}

const showInputToDescription = (id, list, setList, description) => {
  const item = list.find(i => i.id === id);
  const newitem = {...item, description: description, descrInput: !item.descrInput};
  const newList = list.map(i => (i.id === id ? newitem : i));
  setList(newList)
  
}
const addDescription = (id, list, setList, description, setDescription) => {
  const item = list.find(i => i.id === id);
  const newItem = {...item, description: description, descrInput: !item.descrInput};
  const newList = list.map(i => i.id === id ? newItem : i)
  setList(newList);
  setDescription("")
};

// função para ter acesso as fuçoes que estão fora da função app atravez do callback
const handlesubmit = (e, setNewItemText, callback) => {
  e.preventDefault();
  callback();
  setNewItemText("")
}
const handleDescription = (e, setDescription, callback) => {
  e.preventDefault();
  callback()
  setDescription('')
}


function App() {
  const [list, setList] = useState([]);
  const [newItemText, setNewItemText] = useState("");
  const [description, setDescription] = useState("");
  const doneList = list.filter(i => i.done === true);
  const [todoDone, setTodoDone] = useState(false);

  
  console.log("aqui é o des",description)


  return (
    <div className="App">
      <form onSubmit={
        e => handlesubmit(e, setNewItemText,
        () => addItem(list, setList, newItemText))}>
      <input
      autoFocus
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
              <label style={{marginRight: 5}}> 
                <input 
                  checked={i.done}
                  onChange={e => togggleItem(i.id, list, setList)}
                  type="checkbox"
                  key={i.id}/>
                {i.text }
              </label> 
                <ul style={{listStyle: "circle"}}>
          {i.description !== "" && <li key={i.id}>{i.description}</li> }

                  </ul>
              {i.descrInput && 
                <form onSubmit={e => handleDescription(e, setDescription, 
                  () => addDescription(i.id, list, setList, description, setDescription))}>
                  <input
                  autoFocus
                  key={i.id} 
                  type="text" 
                  valeu={description}
                  onChange={e => setDescription(e.target.value)}
                  />
                </form>}
                {console.log(list)}
              <button onClick={() => showInputToDescription(i.id, list, setList, description)}>+</button>
            </li>
          )
          
          }
        </ul>
        
      </div>
      <div>
            
            <button onClick={() => setTodoDone(!todoDone)}>Show done</button>

            <ul style={{listStyle: "decimal"}}>
        {todoDone && doneList.map(i => <li key={i.id}><span className={i.done ? 'todoDone' : ""}>{i.text}</span></li>)}
            </ul>
          </div>
    </div>
  );
}

export default App;