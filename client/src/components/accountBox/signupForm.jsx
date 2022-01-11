import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common'
import { Marginer } from '../marginer'
import { AccountContext } from './accountContext'

export function SignupForm(props) {
  let { switchToSignin } = useContext(AccountContext)
  const history = useHistory()
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    cpassword: '',
  })

  let name, value
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()

    const { name, email, phone, password, cpassword } = user

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
        cpassword,
      }),
    })
    const data = await res.json()
    if (res.status === 422 || !data) {
      // window.alert('invalid Registration')
      // console.log('invalid Registration')
      toast.error('Invalid Credentials', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } else {
      // window.alert('Registration Successful')
      // console.log('Registration Successful')
      toast.success('Registration Successful', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      history.push('/')
      history.push('/AccountBox')
    }
  }

  return (
    <BoxContainer>
      <FormContainer method='POST'>
        <Input
          type='text'
          name='name'
          placeholder='Username'
          autoComplete='off'
          required='required'
          value={user.name}
          onChange={handleInputs}
        />
        <Input
          type='email'
          name='email'
          required='required'
          placeholder='Email'
          autoComplete='off'
          value={user.email}
          onChange={handleInputs}
        />
        <Input
          type='phone'
          name='phone'
          required='required'
          placeholder='phone'
          autoComplete='off'
          value={user.phone}
          onChange={handleInputs}
        />
        <Input
          type='password'
          name='password'
          required='required'
          autoComplete='off'
          value={user.password}
          placeholder='Password'
          onChange={handleInputs}
        />
        <Input
          type='password'
          name='cpassword'
          required='required'
          autoComplete='off'
          value={user.cpassword}
          onChange={handleInputs}
          placeholder='Confirm Password'
        />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <SubmitButton type='submit' onClick={PostData}>
        Signup
      </SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink to='#'>Already have an account?</MutedLink>
      <BoldLink to='#' onClick={switchToSignin}>
        Signin
      </BoldLink>
    </BoxContainer>
  )
}
