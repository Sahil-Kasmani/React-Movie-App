import React from 'react'
import { useState, useEffect } from 'react';
import Search from '../search.svg';
import MovieCard from './MovieCard';
import '../App.css';

const key = "e35bc2b";
const API_URL = `https://www.omdbapi.com/?apikey=${key}`;

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
    const [load, setLoad] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState('');

    const searchMovies = (title) => {
        fetch(`${API_URL}&s=${title}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setMovies(data.Search);
                setLoad(false);
                setNotFound(true);
            })
            .catch((err)=>{
                console.log(err.message);
                setError(err.message)
                setLoad(false);
            })
    }

    useEffect(() => {
        searchMovies('Dark-Knight');
    }, [])


    return (
        <div className='home'>
            <h1>Movie-Space</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => { setSearch(e.target.value) }}
                />
                <img src={Search} alt="search" onClick={() => { searchMovies(searchTerm) }} />
            </div>

            {load && <h2 style={{ color: "#f9d3b4" }}>Loading...</h2>}
            {movies && movies.length > 0 ? (
                <MovieCard movies={movies} key={movies.imdbID} />
            ) : (
                notFound && <h2 className='empty'>No movie Found!</h2>
            )
            }
            {error && <div style={{ color: "red", fontSize: "2rem" }}>{error}</div>}
        </div>
    )
}

export default Home