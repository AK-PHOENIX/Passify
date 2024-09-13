import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-black h-20 text-white text-center flex items-center justify-center fixed bottom-0 w-full gap-5'>
        <div className="logo font-bold text-xl">
            <span className="text-green-500">&lt;</span>
            <span>Pass</span>
            <span className="text-green-500">ify/&gt;</span>
            </div>
        <div >All rights reserved Copyright@2024</div>
        <button><img className='w-7 invert' src="Images/github.svg" alt="" /></button>
    </div>
  )
}

export default Footer