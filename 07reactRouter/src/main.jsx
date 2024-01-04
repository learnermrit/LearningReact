import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element : <Home/>
//       },
//       {
//         path:"about",
//         element : <About/>
//       },
//       {
//         path:"contactus",
//         element : <Contact/>
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/user/:id' element={<User/>}/> 
      <Route
      loader ={githubInfoLoader} 
      path= '/github' 
      element={<Github/>}
      />

      


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>  
  </React.StrictMode>,
  
)
