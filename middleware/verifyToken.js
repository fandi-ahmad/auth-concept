const { verify } = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)
  verify(token, process.env.AUTH_ACCESS_TOKEN, (err, decode) => {
    if (err) return res.sendStatus(403)
    req.email = decode.email
    next()
  })
}

module.exports = { verifyToken }