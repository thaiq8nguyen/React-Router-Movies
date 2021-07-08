import React from 'react'

const About = ({movie}) => {
    console.log(movie)
    return (
        <div className="content">
        <p className="title">{movie.title}</p>
        <p>IMDB Rating: <span className="has-text-grey">{movie.imdbRating}/10</span></p>
        <p>Director: <span className="has-text-grey">{movie.director}</span></p>
        <p>Year: <span className="has-text-grey">{movie.year}</span></p>
        <p>Rated: <span className="has-text-grey">{movie.rated}</span></p>
        <p>Metascore: <span className="has-text-grey">{movie.metascore}</span></p>
        <p>{movie.plot}</p>
        </div>
    )
}

export default About
