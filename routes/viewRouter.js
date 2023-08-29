const router = require("express").Router()

router.get('/login-page', (req, res) => res.render('login'))
router.get('/dashboard', (req, res) => res.render('dashboard'))

module.exports = router