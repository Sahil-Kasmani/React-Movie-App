import React from 'react'

const SingleMovieDeta = ({ details }) => {
    return (
        <div className='single-movie'>
            <div className='poster'>
                <img src={details.Poster !== "N/A" ? details.Poster : 'https://via.placeholder.com/400'} alt="poster" />
            </div>
            <div className='info'>
                <h1>Movie: {details.Title}</h1>
                <p>Year: <span>({details.Year})</span> Rating: <span>{details.Rated}</span> Released: <span>{details.Released}</span></p>
                <p>Type: <span>{details.Type}</span> Genre: <span className='genre'>{details.Genre}</span></p>
                <p>⭐: <span>{details.imdbRating}</span> Language: <span>{details.Language}</span></p>
                <p>Director: <span>{details.Director}</span></p>
                <p>Actors: <span>{details.Actors}</span></p>
                <p>Plot: <span>{details.Plot}</span> </p>
            </div>


        </div>
    )
}

export default SingleMovieDeta