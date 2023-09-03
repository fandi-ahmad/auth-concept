const express = require('express')
const cookieParser = require('cookie-parser')
const { urlencoded } = require('body-parser')
const { config } = require('dotenv')
const cors = require('cors')
const router = require('./routes/router')
const app = express()
const port = 8000

const secretKey = () => { return process.env.SECRET_KEY_COOKIES }

const allowedOrigins = [ process.env.IP_PORT_ACCESS_FRONTEND_1, process.env.IP_PORT_ACCESS_FRONTEND_2, ];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors())
config()
app.use(urlencoded({ extended: true }))
app.use(cookieParser(secretKey()));
app.use(express.static('views'));
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json())
app.use(router)


app.listen(port, () => {
  console.log(`This app listening on port ${port}`)
})