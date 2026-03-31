import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {Routes, Route} from 'react-router-dom'
import PasswordGenerator from './components/PasswordGenerator'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0);
  

  
  return (
    <div className='bg-gray-100'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Hero />}>Home</Route>
          <Route path='/about' element={<About />}>Home</Route>
          <Route path='/contact' element={<Contact />}>Home</Route>
          <Route path='/passgen' element={<PasswordGenerator />}>PassGen</Route>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
