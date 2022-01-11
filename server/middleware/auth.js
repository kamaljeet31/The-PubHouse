import jsonwebtoken from 'jsonwebtoken'
import User from '../models/userSchema.js'

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken
    if (!token) {
      console.log('token not found', token)
    }
    const verifyToken = jsonwebtoken.verify(token, process.env.SECRET_KEY)

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      'tokens.token': token,
    })

    if (!rootUser) {
      throw new Error('user not found')
    }

    req.token = token
    req.rootUser = rootUser
    req.userID = rootUser._id

    next()
  } catch (error) {
    res.status(401).send('Unauthorized:No token provided')
    console.log(error)
  }
}
export default Authenticate
