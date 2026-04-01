import React from 'react'
import Card from './Card'

const Hero = () => {
  return (
    <div className='mt-5 p-4 h-screen'>
      <h1 className='text-5xl font-extrabold text-center'>Dream, Build, Repeat</h1>
      <p className='text-center text-2xl font-light mt-5 text-green-800'>Success is built by those who never stop creating.</p>
      <br />
      <div className='text-center mt-3'>
        <button className='bg-gray-300 text-xl hover:scale-95 transition duration-700 ease-in-out font-semibold rounded-2xl p-3 shadow-2xl'>Join Now &raquo;</button>
      </div>
      <br />
      <br />
      <div className="m-5 p-5 flex justify-center">
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card linkto="/passgen" title="Password Generator" />
          <Card linkto="/about" title="About Page From Here" />
          <Card linkto="/contact" title="Contact Page From Here" />
        </div>
      </div>
    </div>
  )
}

export default Hero
