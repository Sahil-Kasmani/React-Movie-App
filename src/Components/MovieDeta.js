import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleMovieDeta from './SingleMovieDeta';


const key = "e35bc2b";
const API_URL = `https://www.omdbapi.com/?apikey=${key}`;

// movie = [{
//     "Title": "The Avengers",
//     "Year": "2012",
//     "Rated": "PG-13",
//     "Released": "04 May 2012",
//     "Runtime": "143 min",
//     "Genre": "Action, Sci-Fi",
//     "Director": "Joss Whedon",
//     "Writer": "Joss Whedon, Zak Penn",
//     "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
//     "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//     "Language": "English, Russian",
//     "Country": "United States",
//     "Awards": "Nominated for 1 Oscar. 38 wins & 80 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "8.0/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "91%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "69/100"
//         }
//     ],
//     "Metascore": "69",
//     "imdbRating": "8.0",
//     "imdbVotes": "1,420,774",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "DVD": "25 Sep 2012",
//     "BoxOffice": "$623,357,910",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }]

const MovieDeta = () => {
    const { imdbID } = useParams('');
    const [details, setDetails] = useState([]);
    const [error,setError] = useState('');
    const [load, setLoad] = useState(true);
    // const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}&i=${imdbID}&plot=full`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setDetails(data);
                setLoad(false);
            })
            .catch(err=>{
                console.log(err.message);
                setError(err.message);
                setLoad(false);
            })
        }, [imdbID])
        

    return (
        <div className='movie-details'>
            {load && <h2 style={{ color: "#f9d3b4" }}>Loading...</h2>}
            {!load && !error && <SingleMovieDeta details={details}/>}
            {error && <div style={{color: "red", fontSize: "2rem"}}>{error}</div>}
        </div>
    )
}

export default MovieDeta