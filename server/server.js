import express from 'express'
import './loadEnv.js'
import './db/conn.js'
import './models/userSchema.js'
const app = express()

import router from './routers/router.js'

import cookieParser from 'cookie-parser'
app.use(cookieParser())

const port = process.env.PORT
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  res.send('HELLO w')
})

app.listen(port, () => {
  console.log(`listening on local host ${port}`)
})
