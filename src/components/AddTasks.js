import React, { useState } from 'react'

function AddTasks({AddTask}) {
    const [value,setValue] = useState("");
    const  addItem = ()=>{
        AddTask(value)
        setValue("")
    }

  return (
    <>
    <div className='input-container'>
        <input type="text" className='input' placeholder='Add New Task' value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        />
        <button onClick={addItem}  className='add-btn'>ADD TASK</button>
    </div>
    </>
  )
}

export default AddTasks