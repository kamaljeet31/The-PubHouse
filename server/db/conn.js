import mongoose from 'mongoose'
const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log('connection successful')
  })
  .catch(() => {
    console.log('no connection')
  })
