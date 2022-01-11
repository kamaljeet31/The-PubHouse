import React, { useEffect, useContext } from 'react'
import { UserContext } from '../App'
import { useHistory } from 'react-router-dom'

const Logout = () => {
  const { dispatch } = useContext(UserContext)

  const history = useHistory()
  useEffect(() => {
    fetch('/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        dispatch({ type: 'USER', payload: false })
        history.push('/', { replace: true })
        // window.location.reload()
        if (res.status !== 200) {
          const error = new Error(res.error)
          throw error
        }
      })
      .catch((err) => {
        console.log(err)
      })
  })
  return <div>Logout</div>
}

export default Logout
