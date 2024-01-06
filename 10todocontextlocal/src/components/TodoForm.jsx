import React, { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {

    const [todo,setTodo] = useState("")

    const {addTodo} = useTodo ()

    const add = (e)=>{
        e.preventDefault()

        if(!todo) return 

        addTodo({todo : todo,completed : false})
        setTodo("") // to clear the feild as we are erasing data here

        //addTodo({todo : todo,completed : false})
        // we are passing a todo object to addTodo function written in App.jsx
        // const addTodo =(todo)=>{
        //     setTodos((prev)=>[{id:Date.now(),...todo},...prev,])
        //     //settodos ko callback me pehle state ka value mil jata hai isliye ...prev ko spread kiye aur ek nya value(object) aage add kr diye
        //   }

    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //This is known as Wiring as we are connecting State with the input Feild
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}





export default TodoForm;
