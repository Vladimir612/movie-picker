import React, { useEffect } from 'react'
import { movieCreditsUrl, specificMovieUrl } from '../../data/apiURL'
import { useSingleMovie } from './../../data/SingleMovieContext'
import defaultImg from '../../img/defaultImage.png'
import defaultBgImg from '../../img/defaultImageBg.jpg'
import './movie.sass'
import Loader from '../../Components/Loader'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useHistory, Link } from 'react-router-dom'
import { useScroll } from '../../data/ScrollContext'
import SingleActor from '../../Components/SubComponents/SingleActor'

const Movie = (props) => {
  const history = useHistory()
  let { setShouldScroll, setPositionTo } = useScroll()

  const slug = props.match.params.movie
  let finalUrl = specificMovieUrl.replace('movie-id', slug)
  let movieActorsUrl = movieCreditsUrl.replace('movie-id', slug)
  const {
    getSingleMovie,
    getMovieActors,
    singleMovie,
    movieActors,
    loading,
    loadingActors,
  } = useSingleMovie()

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

  useEffect(() => {
    getSingleMovie(finalUrl)
    getMovieActors(movieActorsUrl)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return loading && loadingActors ? (
    <div className='loader-wrapper whole-page'>
      <Loader />
    </div>
  ) : (
    <div className='movie-page'>
      <div className='back-button-wrapper'>
        <button
          className='back'
          onClick={() => {
            setShouldScroll(true)
            setPositionTo(1)
            history.goBack()
          }}
        >
          <IoArrowBackOutline size={25} />
        </button>
      </div>
      <div
        className='back-image'
        style={{
          backgroundImage: `url(${
            singleMovie.backImage ? singleMovie.backImage : defaultBgImg
          })`,
        }}
      ></div>
      <div className='movie-poster'>
        <img
          src={singleMovie.frontImage ? singleMovie.frontImage : defaultImg}
          alt={singleMovie.movieTitle}
        />
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
        <div className='more-info'>
          <span className='movie-duration'>Duration: {duration}</span>
          <span className='separator'>|</span>
          <span className='movie-status'>Status: {singleMovie.status}</span>
        </div>

        {singleMovie.homepage && singleMovie.homepage.includes('netflix') && (
          <div className='watch-link'>
            {singleMovie.homepage && (
              <a href={singleMovie.homepage} target='blank'>
                <button>WATCH ON NETFLIX</button>
              </a>
            )}
          </div>
        )}

        <h2 className='cast'>Cast: </h2>
        <div className='movie-actors'>
          {movieActors.map((actor) => {
            return (
              <Link key={actor.id} to={`/actors/${actor.id}`}>
                <SingleActor data={actor} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Movie
