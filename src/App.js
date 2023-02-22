import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  const resetField = ()=> {
    setToDo("")
  }

  const deleteTask = (e1)=> {
    const test = [...toDos]
    var index=e1.target.parentElement
    test.splice(index, 1)
    setToDos(test)
  }

  return (
    <div className="app">
      <div className="image">
        <img src="todo.png" alt="todo" width="100" height="100"></img>
      </div>
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Tasks for the day </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])
          resetField();
        }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
      { toDos.map((obj)=>{

        return (<div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setToDos(toDos.filter(obj2=>{
                if (obj2.id===obj.id) {
                  obj2.status=e.target.checked
                }
                return obj2
              }))
              
            }}value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={(e1)=> deleteTask(e1)}
              
           className="fas fa-close"></i>
          </div>
        </div>)
      }) }
      </div>
    </div>
  );
}

export default App;
