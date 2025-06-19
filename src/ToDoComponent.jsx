import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import Button from '@mui/material/Button'

function ToDoComponent(){
  let [todos,setTodo] = useState([{task:"Sample Task",taskState:true,id:uuidv4()}])

  function addTask(formData){
    let newTask = formData.get("task")

    setTodo((prevTodo)=>{
      return [...prevTodo,{task:newTask,taskState:false,id:uuidv4()}]
    })
  }

  function deleteTask(idToDel){
    let deleteTask = todos.filter((t)=>t.id != idToDel)
    setTodo(deleteTask);
  }

  function doneTask(id){
    setTodo((prevTodo)=>
      prevTodo.map((t)=>(
        t.id === id ? {...t,taskState:!t.taskState}:t
      ))
    )
  }
  
  return(
    <>
      <form action={addTask}>
        <input type="text" placeholder="Enter the task" name="task"/>
        &nbsp; &nbsp;
        <button type="submit">Add Task</button>
      </form>

      <hr />
      <h3>List of task :-</h3>
      <ul>{
        todos.map((t)=>(
          <li key={t.id} style={{textDecoration: t.taskState ? "line-through": "none" }}>{t.task} &nbsp; &nbsp; 
            <Button onClick={()=>doneTask(t.id)} variant="text" sx={{ color: 'green'}}><i className="fa-solid fa-square-check"></i></Button>
            <Button onClick={()=>deleteTask(t.id)} variant="text" sx={{ color: 'red' }}><i className="fa-solid fa-trash"></i></Button>
          </li>
        ))
      }</ul>
    </>
  )
}

export default ToDoComponent