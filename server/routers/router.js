import express from 'express'
import User from '../models/userSchema.js'
import '../db/conn.js'
import bcrypt from 'bcryptjs'
import Authenticate from '../middleware/auth.js'
// require('../db/conn')

const router = express.Router()

router.get('/home', (req, res) => {
  console.log('hello from router page')
  res.send('hello from router page')
})

//About us  page
router.get('/contact', Authenticate, (req, res) => {
  res.send(req.rootUser)
})

// get User Data for contact us and homepage
router.get('/getData', Authenticate, (req, res) => {
  res.send(req.rootUser)
})

//logout  page
router.get('/logout', (req, res) => {
  res.clearCookie('jwtoken', { path: '/' })
  res.status(200).send('User logout')
})

//login page
router.get('/login', (req, res) => {
  res.json({ message: req.body })
  // res.send('login ka page')
  console.log(req.body)
})

//contact us  page
router.post('/contact', Authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    if (!name || !email || !phone || !message) {
      return res.status(422).json({ error: 'plz fill the contact form' })
    }
    const userContact = await User.findOne({ _id: req.userID })
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      )
      await userContact.save()
      res.status(201).json({ message: 'user Contact Successfully' })
    }
  } catch (error) {
    console.log(error)
  }
})

// Create Login
// let token
router.post('/login', async (req, res) => {
  let token
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'plz fill the data' })
    }
    const userLogin = await User.findOne({ email })
    // console.log(userLogin)
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)

      token = await userLogin.generateAuthToken()
      console.log(token)

      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      })

      if (!isMatch) {
        res.status(400).json({ error: 'Invalid Credentials pass' })
      } else {
        res.json({ message: 'user Signin Sussessfully' })
      }
    } else {
      res.status(400).json({ error: 'Invalid Credentials' })
    }
  } catch (error) {
    console.log(error)
  }
})

// Create register
router.post('/register', async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body

  if (!name || !email || !phone || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: 'please fill the data in sign up fields' })
  }
  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ error: 'email already present' })
    } else if (password != cpassword) {
      return res.status(422).json({ error: 'password not matching' })
    } else {
      const user = new User({
        name,
        email,
        phone,
        password,
        cpassword,
      })

      const userRegister = await user.save()

      console.log(`${user} user Registerd succesfully`)
      console.log(userRegister)

      await user.save()
      res.status(201).json({ message: 'user res success' })
    }
  } catch (error) {
    console.log(error)
  }
})
export default router
