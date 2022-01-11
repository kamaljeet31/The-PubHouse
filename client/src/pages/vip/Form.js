import React, { useState } from 'react'
import './Form.css'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const closeBtn = () => setIsSubmitted(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn' onClick={closeBtn}>
          ×
        </span>
        <div className='form-content-left'>
          <h1>VIP Invitation</h1>
          <p>
            Please take a moment to fill out our VIP Newsletter Member form
            below. VIP Newsletter Members receive access to a wide range of
            exclusive benefits which include automatic entry into all of our
            contests, compliments from The Uptown on your birthday and/or
            anniversary, invitations to cocktail evenings, periodical
            newsletters and other special promotions from The Uptown. Please
            note that your privacy is important to us and your information will
            not be passed on to any third parties. View our Privacy Policy.
          </p>

          <img className='form-img' src='images/menu6.jpg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  )
}

export default Form
