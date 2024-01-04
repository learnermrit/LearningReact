import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

       <h1 className='bg-green-400 rounded-xl p-4'>React- Router</h1>
    </>
  )
}

export default App
