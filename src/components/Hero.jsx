import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import hero from './Hero.jpg'


const Hero = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="pretty title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Save your Passwords So you'll Never forget them
      </h1>
      <p class="mb-8 leading-relaxed">It's very often that we login to many of the websites and we create there different paswords for each of the websites and we forgets about the passwords and username that we created to overcome this i have made you a Password saving that will save your passwords for you along with the Username and Websites link.</p>
      <div class="flex justify-center">
      <NavLink to='/savepasswords'>
        <button class="inline-flex  text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">Add Passwords</button>
        </NavLink>
        <NavLink to='/contact'>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button></NavLink>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded aspect-square" width={"420"} alt="hero" src={hero} />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero