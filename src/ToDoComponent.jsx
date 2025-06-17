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
    setToDo([...toDo,{task:newToDo,id:uuidv4()}])
    setNewToDo("")
    }

    let updateToDo =(event)=>{
    setNewToDo(event.target.value)
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
                  return <li key={toDo.id}>{toDo.task}</li>
                })
            }
            </ul>
        </div>
    )
}

export default ToDoComponent