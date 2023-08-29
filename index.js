const express = require('express')
const cookieParser = require('cookie-parser')
const { config } = require('dotenv')

config()
const router = require('./routes/router')
const port = 8000

const app = express()
const secretKey = 'mysecretkey';

app.use(cookieParser(secretKey));
app.use(express.json())
app.use(router)
// app.use(express.static('client'));
app.set('view engine', 'ejs')
app.set('views', 'views')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})