import React from 'react'

const index = (props) => {
  const slug = props.match.params.movie
  console.log(slug)
  return (
    <div className='movie-page'>
      <h1>Movie page</h1>
    </div>
  )
}

export default index
