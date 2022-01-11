import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <section className='banner' id='banner'>
        <div className='content'>
          <h2>Welcome to The Pub House</h2>

          <Link to='/menu' className='btn'>
            Our Menu
          </Link>
          <div>
            <Link to='/contact' className='btn'>
              Reserve Table
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
