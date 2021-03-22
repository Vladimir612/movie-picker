import React from 'react'
import './top-header.sass'

const TopHeader = (props) => {
  const { firstText, secondText, left } = props

  return (
    <header className='top-header'>
      <div className='header-text' style={{ left: left }}>
        <h1 className='first'>{firstText}</h1>
        <h1 className='second'>{secondText}</h1>
      </div>
    </header>
  )
}

export default TopHeader
