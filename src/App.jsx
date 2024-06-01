import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Movie from './components/Movie'

function App() {
  return (
    <div className='glass max-h-full max-h-full' data-theme='cyberpunk'>
      <Navbar />
      <section className='flex flex-row justify-between gap-3 flex-wrap p-5'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </section>
      <Hero />
      <Footer/>
    </div>
  )
}

export default App
