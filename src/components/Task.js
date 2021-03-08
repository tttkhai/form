import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


function Task (){
    const [tasks, setTasks]= useState([])
    const addTask=(value)=>{
        console.log("addTask being hit"+JSON.stringify(value))
        const newTask=[...tasks, value]
        setTasks(newTask)
        console.log("Tasks: "+ JSON.stringify(tasks))
    }

    const remove=(_id)=>{
        console.log("remove being hit")
        const newTask=tasks.filter(({id})=> {return id!==_id})
        setTasks(newTask)
    }

    const saveEdit=({id, value})=>{
        console.log("saveEdit being called")
        console.log("saveEdit: "+id+", "+value)

        const newValue = tasks.find(el=>el.id===id)
        console.log("newValue: "+JSON.stringify(newValue))

        newValue.value=value

        setTasks(...tasks, newValue)
        console.log("new taskValue: "+JSON.stringify(tasks))

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