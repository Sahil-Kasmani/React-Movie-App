import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDeta = () => {
    const { imdbID } = useParams();
  return (
    <div>
        <h2 style={{color: "white"}}>Movie Details {imdbID}</h2>
    </div>
  )
}

export default MovieDeta