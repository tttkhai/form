import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function Task (){
    const [tasks, setTasks]= useState([])
    const addTask=(value)=>{
        const newTask=[...tasks, value]
        setTasks(newTask)
    }

    const remove=(_id)=>{
        const newTask=tasks.filter(({id})=> {return id!==_id})
        setTasks(newTask)
    }

    const saveEdit=({id, value})=>{
        setTasks(prev=>prev.map(item=> item=item.id===id?{id: item.id, value:value}:item))
    }
    
    return (
        <div className="App">
            <h1>Add new tasks</h1>
            <TaskForm addTask={addTask} tasks={tasks}/>
            <TaskList tasks={tasks} saveEdit={saveEdit} remove={remove} />
        </div>
    );
}

export default Task;