import {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Movie from './components/Movie'
import Error from './components/Error'

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;
function App() {

  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovie('transformers');
  }, []);


  return (
    <div className='max-h-full max-h-full'>
      <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} searchMovie={searchMovie}/>
      <section className='flex flex-row items-start justify-start gap-5 flex-wrap container m-auto py-8'>

        {
          movies?.length > 0
          ? (
            <>
              { movies.map((movie, key) => 
                (
                    <Movie key={key} movie={movie}/>
                )
              ) }

            </>
          ) : (
            <Error />
          )
        }

      </section>
      <Footer/>
    </div>
  );
}

export default App
