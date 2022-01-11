import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/icons/Menu'
import logo from '../logo.svg'
import '../index.css'
import '../home.css'

export default function Navbar() {
  const { state } = useContext(UserContext)

  const [showLinks, setShowLinks] = useState(false)
  const closeMobileMenu = () => setShowLinks(false)

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li>
            <NavLink to='/menu' onClick={closeMobileMenu}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/form' onClick={closeMobileMenu}>
              VIP
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={closeMobileMenu}>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/logout' onClick={closeMobileMenu}>
              Logout
            </NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li>
            <NavLink to='/menu' onClick={closeMobileMenu}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/form' onClick={closeMobileMenu}>
              VIP
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={closeMobileMenu}>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/AccountBox' onClick={closeMobileMenu}>
              Login
            </NavLink>
          </li>
        </>
      )
    }
  }
  return (
    <nav className='navbar'>
      <div className='nav-center '>
        <div>
          <NavLink to='/'>
            <img src={logo} alt='logo' className='logo' />
          </NavLink>
        </div>
        <div>
          <ul className='nav-links' id={showLinks ? 'hidden' : ''}>
            <RenderMenu />
          </ul>
          <div onClick={() => setShowLinks(!showLinks)}>
            <Menu className='menuBtn' />
          </div>
        </div>
      </div>
    </nav>
  )
}
