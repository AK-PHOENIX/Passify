import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div>
        <header><Navbar/></header>
        <main className='main-container'>
        {children}
      </main>
        <footer><Footer/></footer>    
    </div>
  )
}

export default Layout