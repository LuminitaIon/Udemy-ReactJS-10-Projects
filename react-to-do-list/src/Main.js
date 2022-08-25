import React, { useState } from 'react'

function Main() {

    const [taskname, setTaskname] = useState('')
    const [tasklist, setTasklist] = useState([])
    
    function addTask() {
        setTasklist([...tasklist, taskname])
    }

    
    const deleteTask = (index) => {
        const duparray = [...tasklist]
        duparray.splice(index, 1)
        setTasklist(duparray)
    }

    const tasklistcontent = tasklist.map((task, index) => {
        return (
            <div>
                <p>
                    {task}
                </p>
                <i class="far fa-trash-alt" onClick={() => deleteTask(index)}></i>
            </div>
        )
    })

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <h1>React TODO List</h1>
                    <input type='text' placeholder='Enter task' className='form-control' value={taskname}
                        onChange={(e) => {setTaskname(e.target.value)}}/>
                    <button className='btn btn-primary' onClick={addTask}>ADD</button>

                    <br />
                    {tasklistcontent}
                </div>
            </div>
        </div>
    )
}

export default Main