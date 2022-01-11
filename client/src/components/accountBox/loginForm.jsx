import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../App.js'
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

export function LoginForm(props) {
  const { dispatch } = useContext(UserContext)

  const { switchToSignup } = useContext(AccountContext)
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault()
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await res.json()
    if (res.status === 400 || !data) {
      toast.error('Invalid Credentials', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } else {
      dispatch({ type: 'USER', payload: true })
      toast.success('Login Successful', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      history.push('/')
    }
  }

  return (
    <BoxContainer>
      <FormContainer method='POST'>
        <Input
          type='email'
          name='username'
          placeholder='Username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required='required'
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required='required'
        />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <MutedLink href='#'>Forget your password?</MutedLink>
      <Marginer direction='vertical' margin='1.6em' />
      <SubmitButton type='submit' onClick={loginUser}>
        Signin
      </SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink to='#'>Don't have an account?</MutedLink>

      <BoldLink to='#' onClick={switchToSignup}>
        Signup
      </BoldLink>
    </BoxContainer>
  )
}
