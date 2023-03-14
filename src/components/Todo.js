import React, { useEffect, useState } from 'react'
import "./Todo.css"
import AddTasks from './AddTasks'
import ListTasks from './ListTasks'





const Todo = () => {
    const [tasks,setTasks] = useState([])
    
    
    //for showing the tasks in the title
    useEffect(()=>{
        document.title=`TOTAL TASK:${tasks.length}`
    })


   //for adding tasks
const AddTask = (title)=>{
    const newTask = [...tasks,{title}]
    setTasks(newTask)
}
 
  //for deleting tasks
const removeTask = (index)=>{
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
}
    
  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
            <AddTasks AddTask = {AddTask}/>
        </div>
        <p className='pending'>You Have <span className='span-length'>{tasks.length}</span> Pending Tasks.</p>
        <div className='tasks'>
            {tasks.map((task,index)=>(
                <ListTasks task={task}  removeTask = {removeTask} index={index}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Todo