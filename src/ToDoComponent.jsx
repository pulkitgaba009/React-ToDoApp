import { useState } from "react"
import {v4 as uuidv4} from "uuid"

let inputBtnStyle = {
    height:"2.25rem",
    borderRadius:"10px",
    width:"15rem",
}

function ToDoComponent(){

    let [toDo,setToDo] = useState([{task:"Sample task",id:uuidv4()}])
    let [newToDo,setNewToDo] = useState("")

    let addNewTask = ()=>{
    setToDo((prevTodo)=>{
        return [...prevTodo,{task:newToDo,id:uuidv4()}]
    })
    setNewToDo("")
    }


   let upperCaseAll = () => {
    setToDo(
        toDo.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase()
            };
        })
    );
};


    let updateToDo =(event)=>{
    setNewToDo(event.target.value)
    }

    let deleteTodo = (id) =>{
        let copy = (toDo.filter((toDo)=> toDo.id != id));
        setToDo(copy)
    }

    return(
        <div>
            <input style={inputBtnStyle} type="text" placeholder="Enter the task " value={newToDo} onChange={updateToDo}/>
            &nbsp; &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br/> 
            <br />
            <hr /> 
    

            <h4>To Do list:</h4>
            <ul>{
                toDo.map((toDo)=>{
                  return <li key={toDo.id}>
                  <span>{toDo.task} <button onClick={()=>deleteTodo(toDo.id)}>Delete</button></span>
                  </li>
                })
            }
            </ul>

            <button onClick={upperCaseAll}>Update All</button>
        </div>
    )
}

export default ToDoComponent