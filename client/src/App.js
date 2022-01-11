import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer/UseReducer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import KitchenExpert from './pages/KitchenExpert'
import Testimonials from './pages/Testimonials'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Cocktails from './pages/Cocktails.js'
// import components
import Navbar from './components/Navbar'
import styled from 'styled-components'
import { AccountBox } from './components/accountBox'
import Footer from './components/Footer'
import Form from './pages/vip/Form'
import Logout from './components/Logout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// 1. contextAPI
export const UserContext = createContext()
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/cocktails'>
          <Cocktails />
        </Route>
        <Route path='/menu'>
          <Menu />
        </Route>
        <Route path='/form'>
          <Form />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/KitchenExpert'>
          <KitchenExpert />
        </Route>
        <Route path='/Testimonials'>
          <Testimonials />
        </Route>

        <Route path='/cocktail/:id'>
          <SingleCocktail />
        </Route>
        <Route path='/AccountBox'>
          <AppContainer>
            <AccountBox />
          </AppContainer>
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <ToastContainer autoClose={3000} />
        <Routing />
      </UserContext.Provider>
    </>
  )
}

export default App
