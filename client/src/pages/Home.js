import React from 'react'
import LandingPage from '../pages/LandingPage'
import KitchenExpert from '../pages/KitchenExpert'
import Testimonials from '../pages/Testimonials'
import Menu from '../pages/Menu'
import '../home.css'

const Home = () => {
  return (
    <main>
      <LandingPage />
      <KitchenExpert />
      <Menu />
      <Testimonials />
    </main>
  )
}

export default Home
