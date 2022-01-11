import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear()
    return currentYear
  }
  return (
    <>
      <div className='copyrightText'>
        <p>
          Copyright &#9400; {getYear()} <Link to='/'>kamaljeet.com</Link> All
          Rights Reserved
        </p>
      </div>
    </>
  )
}

export default Footer
