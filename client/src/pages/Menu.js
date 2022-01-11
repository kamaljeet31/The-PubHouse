import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className='title'>
          <h2 className='titleText ttl'>
            Our<span>M</span>enu
          </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='content'>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/menu1.jpg' alt='menu1' />
            </div>
            <div className='text'>
              <h3>Deadly</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/menu2.jpg' alt='menu2' />
            </div>
            <div className='text heading'>
              <h3>Fancy</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/menu3.jpg' alt='menu3' />
            </div>
            <div className='text'>
              <h3>Flaming</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/menu4.jpg' alt='menu4' />
            </div>
            <div className='text'>
              <h3>Gentle</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/menu5.jpg' alt='menu5' />
            </div>
            <div className='text'>
              <h3>Sweet</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/menu6.jpg' alt='menu6' />
            </div>
            <div className='text'>
              <h3>Slow</h3>
            </div>
          </div>
        </div>
        <div className='title'>
          <Link to='/cocktails' className='btn'>
            View All
          </Link>
        </div>
      </section>
    </>
  )
}

export default Menu
