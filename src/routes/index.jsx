import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import Layout from '../components/Layout'



const AppRouter = () => {
  return (
    <Routes> 
          
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
              <Route element = {<ProtectedRoute/>}>
                    
                 
              </Route>
               <Route path="login" element={<Login/>} />
             
             <Route path="about" element={<About />} />
            
         </Route>
    </Routes>
  )
}



export default AppRouter