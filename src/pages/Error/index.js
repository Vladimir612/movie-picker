import React from 'react'
import TopHeader from './../../Components/TopHeader'
import './error.sass'

const Error = () => {
  return (
    <div className='error-page'>
      <TopHeader firstText='404' secondText='Page Not Found' left='43%' />
    </div>
  )
}

export default Error
