import { useEffect, useState, useRef } from 'react';


function TaskForm ({addTask, edit, changeEdit, tasks, remove}) {
    const [value, setValue]= useState("")
    const [isEdit, setIsEdit]=useState(edit? edit: {id: 0, value: ''})
    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(isEdit.id){
            changeEdit(isEdit)
            return;
        } 

        let id= tasks.length===0?1:Math.max(...tasks.map(({id})=> id))+1
        addTask({id: id, value: value})
        setValue('')
    }

    const handleChange=(e)=>{
        setValue(e.target.value)
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
                    ref={inputRef}
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
                    ref={inputRef}
                /> 
                <button>add</button>
            </> )
            }
        </form>
        </>
    )
}

export default TaskForm