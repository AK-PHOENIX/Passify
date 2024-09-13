import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="bg-green-800 text-white flex justify-between items-center  h-14 px-5">
        
        <div className="logo font-bold text-2xl">
            <span className="text-green-500">&lt;</span>
            <span>Pass</span>
            <span className="text-green-500">ify/&gt;</span>
            </div>
        <ul>
            <li className='flex gap-10'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </li>
        </ul>
        <button className='flex items-center justify-center gap-1 rounded-full p-1 bg-green-700 ring-white ring-1'>
          <img className='w-8 invert' src="Images/github.svg" alt="" />
          <span className='text-xl font-bold px-1 '>GitHub</span>
        </button>
    </nav>
    </>
  )
}

export default Navbar