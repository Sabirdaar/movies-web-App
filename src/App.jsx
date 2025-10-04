import { useState, useEffect, use } from 'react'
import './App.css'
import Search from './components/search.jsx'
import Spinner from './components/spinner.jsx'
import MovieCards from './components/movieCards.jsx'
import { useDebounce } from 'react-use'
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import { getTrendingMovies, updateSearchCount } from './appwrite.js';




const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  }
};

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debounceSearchTerm, setdebounceSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(
    () => {
      setdebounceSearchTerm(searchTerm);
    },
    1000,
    [searchTerm]
  );

  const fetchMovies = async (query = '') => {
    setLoading(true);

    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc `;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('failed to fetch movie');
      }
      const data = await response.json();
      console.log(data);
      if (data.response === 'false') {
        setErrorMessage(data.Error || 'failed to fetch movies');
        setMoviesList([]);
        return;
      }
      setMoviesList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

    } catch (error) {
      console.log(`Error Fetching movies: ${error}`);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  const fetchTrendingMovies = async () => {
    try {
      const trending = await getTrendingMovies();
      setTrendingMovies(trending);
    } catch (error) {
      console.log('Error fetching trending movies:', error);
    }

  }


  useEffect(() => {
    if (debounceSearchTerm) {
      fetchMovies(debounceSearchTerm);
    } else {
      fetchMovies(); // fetch default popular movies when empty
    }
  }, [debounceSearchTerm]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
          <img src="./hero-img.png" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        {trendingMovies.length > 0 && (
          <section className='trending'>
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>
                    {index + 1}</p>
                  <img src={movie.poster_url} alt={movie.searchTerm} />
                </li>

              ))}
            </ul>
          </section>
        )}
        
        <section className='all-movies'>
          <h2>All Movies</h2>

          {loading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {moviesList.map((movie) => (
                <MovieCards key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>


    </main>
  )
}


export default App
