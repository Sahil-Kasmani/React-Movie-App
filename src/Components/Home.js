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

    const [selectYear, setSelectYear] = useState('');
    const [imdbRate, setImdbRate] = useState('');



    const searchMovies = (title, year) => {
        let url = `${API_URL}&s=${title}`;
        if (year) {
            url = url + `&y=${year}`;
        }

        setLoad(true);

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                if(data.Response === "True"){
                setMovies(data.Search);
            }
            else{
                setNotFound(true);
            }
            setLoad(false);
        })
        .catch((err) => {
            console.log(err.message);
            setError(err.message)
            setLoad(false);
            // setNotFound(false)
            })
    }

    useEffect(() => {
        searchMovies(searchTerm, selectYear);
    }, [searchTerm, selectYear])


    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovies(searchTerm, selectYear);
    }

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


            <div className='popular'>
                <form onSubmit={handleSubmit}>
                    <label>Type an IMDB Rating: <input
                        type="text"
                        value={imdbRate}
                        onChange={e => { setImdbRate(e.target.value) }}
                    /></label>
                    <label htmlFor="year"> Year: </label>
                    <select value={selectYear} id="year" onChange={(e) => { setSelectYear(e.target.value) }}>
                        <option value="">No year selected</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select><br /><br />
                </form>
            </div>


            {load && <h2 style={{ color: "#f9d3b4" }}>Loading...</h2>}
            {movies && movies.length > 0 ? (
                <MovieCard movies={movies} key={movies.imdbID} selectedYear={selectYear} imdbRate={imdbRate} Load={load} />
            ) : (
                notFound && !load && <h2 className='empty'>No movie Found!</h2>
            )
            }
            {error && <div style={{ color: "red", fontSize: "2rem" }}>{error}</div>}
        </div>
    )
}

export default Home