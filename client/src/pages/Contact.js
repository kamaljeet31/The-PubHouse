import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Contact = () => {
  const history = useHistory()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const userContact = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      console.log(data)
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      })

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }
    } catch (error) {
      console.log(error)
      history.push('/AccountBox')
    }
  }
  useEffect(() => {
    userContact()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // we are storing data in States

  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUserData({
      ...userData,
      [name]: value,
    })
  }

  // send data to Backend
  const contactForm = async (e) => {
    e.preventDefault()
    const { name, email, phone, message } = userData
    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
    const data = await res.json()
    if (res.status === 422 || !data) {
      alert('message not sent')
    } else {
      alert('message sent')
      setUserData({ ...userData, message: '' })
    }
  }
  return (
    <>
      <div className='container'>
        <div className='contact-box'>
          <div className='left'></div>
          <div className='right'>
            <form method='POST'>
              <h2>Online Booking</h2>
              <input
                className='field'
                type='text'
                value={userData.name}
                placeholder='First Name'
                onChange={handleInputs}
                name='name'
              />
              <input
                className='field'
                type='text'
                value={userData.email}
                placeholder='Email'
                onChange={handleInputs}
                name='email'
              />
              <input
                className='field'
                type='text'
                value={userData.phone}
                placeholder='Phone'
                onChange={handleInputs}
                name='phone'
              />
              <select
                className='register-input white-input field input100'
                required=''
                name='register_ticket'
              >
                <option value=''>How Many Guests?</option>
                <option value='1 Person'>1 Person</option>
                <option value='2 People'>2 People</option>
                <option value='3 People'>3 People</option>
                <option value='4 People'>4 People</option>
                <option value='5 People'>5 People</option>
                <option value='6 People'>6 People</option>
                <option value='7 People'>7 People</option>
                <option value='8 People'>8 People</option>
                <option value='9 People'>9 People</option>
                <option value='10 People'>10 People</option>
              </select>
              <input
                className='register-input white-input field'
                required=''
                name='register_time'
                placeholder='Booking Time'
                type='text'
              ></input>
              <textarea
                className='field'
                placeholder='Message'
                onChange={handleInputs}
                name='message'
                value={userData.message}
              ></textarea>
              <input
                className='btn'
                type='submit'
                value='Book Your Table'
                onClick={contactForm}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
