import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <div className='glass max-h-full max-h-full' data-theme='cyberpunk'>
      <Navbar/>
      <section className='glass'>
        <Hero />
      </section>
      <Footer/>
    </div>
  )
}

export default App
