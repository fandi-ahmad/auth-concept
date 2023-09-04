const router = require("express").Router()
const { addAuthorization, checkAuthInLogin } = require('../middleware/verifyToken')

router.get('/login', checkAuthInLogin, (req, res) => res.render('login'))
router.get('/', addAuthorization, (req, res) => res.render('dashboard'))
// router.get('/get/cookie', (req, res) => {
//     const tokenFromCookie = req.cookies.refreshToken;
//     const refreshTokenCookie = req.signedCookies.refreshToken;
//     res.send('get cookie')
// })

module.exports = router