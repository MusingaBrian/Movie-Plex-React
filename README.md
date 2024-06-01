# React Movie Plex Search App

Movie Plex is a simple React App that allows user to search the Favorite movie and display the movie catalog. Under the hood Movie Plex connects ti OMDB api and Fetches movie data and renders it to the user.

## Sample Code

```
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


```

## App Sreen shots

![Search Results](/public/screenshots/Search_Result_React_Movie_Plex_App.png)
![Not Found Search Results](/public/screenshots/Not_found_React_Movie_Plex_App.png)
