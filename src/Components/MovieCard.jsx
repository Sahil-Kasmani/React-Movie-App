import { Link } from 'react-router-dom';

const MovieCard = ({ movies, selectedYear, imdbRate, Load }) => {
    const filteredMovie = movies.filter((movie) => {
        const yearFilter = selectedYear ? movie.Year === selectedYear : movies;
        const imdbFilter = imdbRate ? parseFloat(movie.imdbRating) >= parseFloat(imdbRate) : movies;
        return yearFilter && imdbFilter;
    });

    return (
        <div className="container">
            {filteredMovie.length > 0 ? (
                filteredMovie.map((movie) => (
                    <div className='movie' key={movie.imdbID}>
                        <Link to={`/movie/${movie.imdbID}`}>
                            <div>
                                <p>{movie.Year}</p>
                            </div>

                            <div>
                                <img src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                            </div>

                            <div>
                                <span>{movie.Type}</span>
                                <h3>{movie.Title}</h3>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
               !Load && <h2 style={{color: "white"}}>No movies found for this selected year and imdb rating !</h2>

            )}
        </div>
    );
}

export default MovieCard;
