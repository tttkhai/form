import { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList ({tasks, remove, saveEdit}) {
    const [edit, setEdit]= useState({id: null, value: ''})
    console.log("TaskList: "+JSON.stringify(tasks))

    const editItem=(id, value)=>{
        setEdit({id: id, value: value})
    }
    const changeEdit=(value)=>{
        saveEdit(value)
        setEdit({id: null, value: ''})
    }
    
    if(edit.id) {
        return <TaskForm changeEdit={changeEdit} edit={edit} />
    }
    return tasks.map(({id, value})=>{
        return (
            <div key={id}>{value}
            <button onClick={()=>editItem(id, value)}>edit</button>
            <button onClick={()=>remove(id)}>remove</button>
            </div>
        )
    })
}

export default TaskList
