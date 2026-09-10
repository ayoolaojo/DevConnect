import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className=' font-mono h-20 w-full bg-blue-500 flex items-center justify-between p-8 text-white text-large font-bold'>
       <h1>UfirstTechnologies</h1>
       <nav className='flex gap-8'>
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/project'>project</Link>
        <Link to ='/profile'>Profile</Link>
        <Link to ='/login'>Login</Link>
       </nav>
        <button>Register Here</button>
    </header>
  )
}

export default NavBar
