import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

 
  // let counter= 15
  const addValue = ()=>{
    
    counter = counter+1;
    console.log("counter", counter);
    if(counter>20){
      counter =20;
      alert("Value Reached upper limit 20")
    }
    setCounter(counter)
  }

  const subtractValue = ()=>{
    
    counter = counter-1;
    console.log("counter", counter);
    if(counter<0){
      counter =0;
      alert("Value is Already 0")
    }
    setCounter(counter)
  }


  return (
    <>
      <h1>Learn React</h1>
      <h2> Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
       <br/>
      <button onClick={subtractValue}>Remove value {counter}</button>
    </>
  )
}

export default App
