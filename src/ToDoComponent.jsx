import { useState } from "react"

let inputBtnStyle = {
    height:"2.25rem",
    borderRadius:"10px",
    width:"15rem",
}

function ToDoComponent(){

    let [toDo,setToDo] = useState(["Sample task"])
    let [newToDo,setNewToDo] = useState("")

    let addNewTask = ()=>{
    setToDo([...toDo,newToDo])
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
                  return <li>{toDo}</li>
                })
            }
            </ul>
        </div>
    )
}

export default ToDoComponent