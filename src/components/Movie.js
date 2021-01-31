import PropsTypes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
  return (
    <div className="movie">
      <div className="movie__poster">
        <img src={poster} alt={title} title={title}/>
      </div>
      <div className="movie__title">{title}</div>
      <div className="movie_year">{year}</div>
      <div className="movie_summary">{summary}</div>
      <div className="genres">
        {
          genres.map((genre, index) => <span key={index}>#{genre}</span>)
        }
      </div>
    </div>
  )
}


Movie.PropsTypes = {
  id: PropsTypes.number.isRequired,
  year: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
}

export default Movie;