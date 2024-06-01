import {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Movie from './components/Movie'

//c372fe48
const API_URL = 'http://www.omdbapi.com?apikey=c372fe48';

const movie1 = {
  "Title": "Transformers",
  "Year": "2007",
  "imdbID": "tt0418279",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWI1NjkxM2MtOTU4My00YzQ5LTliNGMtNmFlM2U5NWM3MDY1XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
};

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
    <div className='glass max-h-full max-h-full'>
      <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} searchMovie={searchMovie}/>
      <section className='flex flex-row items-center gap-6 flex-wrap my-4 mx-8 pt-4'>

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
            <div className="conatiner">
              <h1>No Movies Found!</h1>
            </div>
          )
        }

      </section>
      <Footer/>
    </div>
  );
}

export default App
