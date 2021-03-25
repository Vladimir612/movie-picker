import React, { useEffect } from 'react'
import { specificMovieUrl } from '../../data/apiURL'
import { useSingleMovie } from './../../data/SingleMovieContext'
import './movie.sass'

const Movie = (props) => {
  const slug = props.match.params.movie
  let finalUrl = specificMovieUrl.replace('movie-id', slug)
  const { getSingleMovie, singleMovie } = useSingleMovie()

  const formattedGenres =
    singleMovie.genres &&
    singleMovie.genres.map((genre, index) => {
      if (index === singleMovie.genres.length - 1) {
        return genre
      } else {
        return genre + ','
      }
    })

  const duration =
    Math.floor(singleMovie.runTime / 60) +
    'h ' +
    (singleMovie.runTime % 60) +
    'min'

  console.log(singleMovie)
  useEffect(() => {
    getSingleMovie(finalUrl)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='movie-page'>
      <div
        className='back-image'
        style={{ backgroundImage: `url(${singleMovie.backImage})` }}
      ></div>
      <div className='movie-poster'>
        <img src={singleMovie.frontImage} alt={singleMovie.movieTitle} />
      </div>
      <div className='movie-info'>
        <h1 className='movie-title'>{singleMovie.movieTitle}</h1>
        <div className='movie-genres'>
          <span>Genres:</span>
          <ul className='movie-genres-list'>
            {formattedGenres &&
              formattedGenres.map((genre, index) => {
                return (
                  <li key={index} className='genre'>
                    {genre}
                  </li>
                )
              })}
          </ul>
        </div>
        <div className='movie-overview'>{singleMovie.overview}</div>
        <span className='movie-duration'>Duration: {duration}</span>
        <span className='separator'>|</span>
        <span className='movie-status'>Status: {singleMovie.status}</span>

        {singleMovie.homepage && singleMovie.homepage.includes('netflix') && (
          <div className='watch-link'>
            {singleMovie.homepage && (
              <a href={singleMovie.homepage} target='blank'>
                <button>WATCH ON NETFLIX</button>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Movie
