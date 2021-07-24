import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, year, title, poster, rating,genres}){
    return (
        <Link to={{
            pathname:`/movie/detail/${id}`,
            state : {
                year,
                title,
                poster,
                rating,
                genres

            }
        }}>
            <div className="movie">
                <img className="movie__poster" src={poster} alt = {title}></img>
                <h2 className="movie__title">Title:{title}</h2>
                <ul className="movie__genres">{genres.map(genre => <li className="genre">{genre}</li>)}</ul>
                <h3 className="movie__year">Year:{year}</h3>
                <h3 className="movie__rating">rating:{rating}</h3>
            </div>

        </Link>
        )
    
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