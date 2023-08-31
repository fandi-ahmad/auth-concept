const express = require('express')
const cookieParser = require('cookie-parser')
const { urlencoded } = require('body-parser')
const { config } = require('dotenv')
const cors = require('cors')

config()
const router = require('./routes/router')
const port = 8000

const app = express()
const secretKey = () => { return process.env.SECRET_KEY_COOKIES }

const allowedOrigins = [ 'http://localhost:8000', 'http://10.130.73.110:8000' ];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};


app.use(urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser(secretKey()));
app.use(router)
// app.use(express.static('client'));
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(cors(corsOptions))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})