import { useState } from 'react';


function TaskForm ({addTask, edit, changeEdit, saveEdit, tasks, remove}) {
    const [value, setValue]= useState("")
    const [isEdit, setIsEdit]=useState(edit? edit: {id: 0, value: ''})
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Handle submit being hit")
        console.log("Handle submit: "+JSON.stringify())
        
        if(isEdit.id){
            console.log("Here Here")
            changeEdit(isEdit)
        } else {
            let id= tasks.length===0?1:Math.max(...tasks.map(({id})=> id))+1
            addTask({id: id, value: value})
            setValue('')
        }
    }

    const handleChange=(e)=>{
        setValue(e.target.value)
        console.log("Tasks: "+ JSON.stringify(value))
    }
    return (
        <> 
        <form onSubmit={(e)=>handleSubmit(e)}>
            {isEdit.id!==0?
            (<>
                <input 
                    type="text" 
                    name="value" 
                    onChange={(e)=>setIsEdit({id: isEdit.id, value: e.target.value})} 
                    value={isEdit.value}
                /> 
                <button type="submit">Update</button>
                <button onClick={()=>remove(isEdit.id)}>remove</button>
            </>)
            :
            (<>
                <input 
                    type="text" 
                    name="value"
                    onChange={handleChange} 
                    value={value}
                /> 
                <button>add</button>
            </> )
            }
        </form>
        </>
    )
}

export default TaskForm