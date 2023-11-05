
// Create the to do item props type struct here 
"use client"
type TodoItemProps = {
    
    id: string 
    title: string 
    complete: boolean
    toggleToDo: (id: string, complete: boolean) => void     
        
}


export function TodoItem({ id, title, complete, toggleToDo }:TodoItemProps ){

    return(
    
    <li className="flex gap-1 items-center" >
    
    <input defaultChecked={complete}
    
    onChange={ e => toggleToDo(id, e.target.checked)}
    className="cursor-pointer peer" id={id} type="checkbox" />
    <label className="peer-checked:line-through peer-checked:text-slate-500" htmlFor={id}> 
    
    {title}
    
    
    </label>
        
    </li>
        
        
    )
    
    
    
}