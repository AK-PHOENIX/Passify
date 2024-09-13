import React from 'react'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Hero from './components/Hero'
import Contact from './components/Contact'

function Home() {
  const router = createBrowserRouter([{
    path:'/',
    element:<><Hero/></>
  },
  {
    
      path:'/savepasswords',
      element: <>  <div className="min-h-[87vh]">

      <Manager/>
     </div></>
    
  },
  {
    path:'/contact',
    element:<> <Contact/> </>
  }
])

  return (
    <>
  

     <RouterProvider router={router}/> 
    </>
  )
}

export default Home
