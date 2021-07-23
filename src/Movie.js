import React from "react"
import PropTypes from "prop-types"

function Movie({id, year, title, poster, rating,genres}){
    return <div className="movie">
        <img className="movie__poster" src={poster} alt = {title}></img>
        <h2 className="movie__title">Title:{title}</h2>
        <ul className="movie__genres">{genres.map(genre => <li className="genre">{genre}</li>)}</ul>
        <h3 className="movie__year">Year:{year}</h3>
        <h3 className="movie__rating">rating:{rating}</h3>
    </div>
    
}

Movie.propTypes = {
    id : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;