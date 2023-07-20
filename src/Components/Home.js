import React from 'react'
import { useState,useEffect } from 'react';
import Search from '../search.svg';
import MovieCard from './MovieCard';
import '../App.css';


const API_URL = 'https://www.omdbapi.com?apikey=e35bc2b';

// const movie1 = {
//     "Title": "Spiderman",
//     "Year": "1990",
//     "imdbID": "tt0100669",
//     "Type": "movie",
//     "Poster": "N/A"
// }

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearch] = useState('');

    const searchMovies = (title) => {
        fetch(`${API_URL}&s=${title}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setMovies(data.Search);
            })
    }

    useEffect(() => {
        searchMovies('Avengers');
    }, [])


    return (
        <div className='home'>
            <h1>Movie-Land</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <img src={Search} alt="search" onClick={() => { searchMovies(searchTerm) }} />
            </div>

            {
                movies.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found!</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Home