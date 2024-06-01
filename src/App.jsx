import {useEffect} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Movie from './components/Movie'

//c372fe48
const API_URL = 'http://www.omdbapi.com?apikey=c372fe48';

useEffect(() => {

}, [])


function App() {
  return (
    <div className='glass max-h-full max-h-full' data-theme='cyberpunk'>
      <Navbar />
      <section className='flex flex-row justify-between gap-3 flex-wrap p-5'>
        <Movie />
      </section>
      <Hero />
      <Footer/>
    </div>
  )
}

export default App
