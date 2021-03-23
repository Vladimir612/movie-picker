import React from 'react'
import { useMovies } from '../../data/MoviesContext'
import SingleMovie from '../SubComponents/SingleMovie'
import './movies.sass'

const Movies = () => {
  let data1 = {
    title: 'Avengers Endgame',
    img: 'https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg',
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    release_date: '2019-04-24',
  }
  const { movie } = useMovies()
  console.log(movie)

  return (
    <div className='movies'>
      <div className='movie-list'>
        <SingleMovie data={data1} />
        <SingleMovie data={data1} />
        <SingleMovie data={data1} />
        <SingleMovie data={data1} />
        <SingleMovie data={data1} />
        <SingleMovie data={data1} />
        <SingleMovie data={data1} />
      </div>
    </div>
  )
}

export default Movies
