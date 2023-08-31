const router = require("express").Router()

router.get('/login', (req, res) => res.render('login'))
router.get('/',  (req, res) => res.render('dashboard'))
router.get('/get/cookie', (req, res) => {
    const tokenFromCookie = req.cookies.refreshToken;
    const refreshTokenCookie = req.signedCookies.refreshToken;
    console.log(tokenFromCookie, '<----- token cookies');
    console.log(refreshTokenCookie, '<----- token cookies dengan signed');

    res.send('get cookie')
})

module.exports = router