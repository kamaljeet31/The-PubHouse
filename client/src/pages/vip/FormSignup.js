import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import validate from './validateInfo'
import useForm from './useForm'
import './Form.css'

const FormSignup = ({ submitForm }) => {
  const history = useHistory()

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
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

      if (!res.status === 200 || !data) {
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

  // const handleInputs = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value

  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   })
  // }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className='heading'>Basic Details</h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={userData.name}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mobile Number</label>
          <input
            className='form-input'
            type='Number'
            name='phone'
            placeholder='Enter your Mobile Number'
            value={userData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <input
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your Address'
            // value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>City</label>
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='Enter your City Name'
            // value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Province</label>
          <select
            className='form-input'
            type='text'
            name='province'
            value={values.province}
            onChange={handleChange}
          >
            {errors.province && <p>{errors.province}</p>}

            <option data-province='' value=''>
              - Select Province -
            </option>
            <option data-province='alberta' value='Alberta'>
              Alberta
            </option>
            <option data-province='british_columbia' value='British Columbia'>
              British Columbia
            </option>
            <option
              data-province='prince_edward_island'
              value='Prince Edward Island'
            >
              Prince Edward Island
            </option>
            <option data-province='manitoba' value='Manitoba'>
              Manitoba
            </option>
            <option
              data-province='northwest_territories'
              value='Northwest Territories'
            >
              Northwest Territories
            </option>
            <option data-province='new_brunswick' value='New Brunswick'>
              New Brunswick
            </option>
            <option data-province='nova_scotia' value='Nova Scotia'>
              Nova Scotia
            </option>
            <option data-province='nunavut' value='Nunavut'>
              Nunavut
            </option>
            <option data-province='ontario' value='Ontario'>
              Ontario
            </option>
            <option data-province='quebec' value='Quebec'>
              Quebec
            </option>
            <option data-province='saskatchewan' value='Saskatchewan'>
              Saskatchewan
            </option>
            <option
              data-province='newfoundland_and_labrador'
              value='Newfoundland and Labrador'
            >
              Newfoundland and Labrador
            </option>
            <option data-province='yukon_territory' value='Yukon Territory'>
              Yukon Territory
            </option>
            <option data-province='other' value='Other'>
              Other
            </option>
          </select>
          {/* <input
                  type='text'
                  class='text block_border'
                  id='member_province2'
                  name='member_province2'
                  value=''
                  maxlength='32'
                /> */}
          <div className='consent'>
            <span>
              <input
                type='checkbox'
                className='checkbox'
                id='consent'
                name='consent'
                value='express'
              />
            </span>
            <label>
              I provide express consent to receive coupons, events or promotions
              via your newsletter.
              <br /> I can unsubscribe at any time.
            </label>
          </div>
        </div>

        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormSignup
