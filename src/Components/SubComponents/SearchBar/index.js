import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './search-bar.sass'

const SearchBar = (props) => {
  let { text } = props
  return (
    <form className='search-form'>
      <input type='text' placeholder={text} name='search' />
      <button type='submit'>
        <BsSearch size={24} />
      </button>
    </form>
  )
}

export default SearchBar
