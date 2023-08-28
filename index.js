const express = require('express')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')

const app = express()
const port = 8000
const secretKey = 'mysecretkey';

app.use(cookieParser(secretKey));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const generateRandomValue = () => {
  return crypto.randomBytes(16).toString('hex');
}

// Contoh route untuk mengatur cookie
app.get('/set-cookie', (req, res) => {
  // Menetapkan cookie dengan nama "user" dan nilai "john"
  res.cookie('user', 'john');

  // Menetapkan cookie dengan opsi kadaluwarsa dalam waktu 30 detik (30 x 1000ms)
  res.cookie('preferences', 'darkMode', { maxAge: 30000 });

  res.send('Cookies telah diatur.');
});
  
// Contoh route untuk membaca nilai cookie
app.get('/get-cookie', (req, res) => {
  // Membaca nilai cookie "user"
  const user = req.cookies.user;

  // Membaca nilai cookie "preferences"
  const preferences = req.cookies.preferences;

  res.send(`Cookie "user": ${user}, Cookie "preferences": ${preferences}`);
});


app.get('/set-signed-cookie', (req, res) => {
  const randomValue = generateRandomValue();
  res.cookie('mySignedCookie', randomValue, { signed: true, maxAge: 10000 });
  res.send('Signed cookie telah diatur.');
});

app.get('/get-signed-cookie', (req, res) => {
  const signedValue = req.signedCookies.mySignedCookie;
  const value = req.cookies.mySignedCookie;
  const user = req.cookies.user

  res.send(`Nilai signed cookie: ${signedValue} | cookie tanpa signed: ${value} | user: ${user}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})