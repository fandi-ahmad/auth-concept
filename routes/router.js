const router = require("express").Router()
const cookieRouter = require('./cookieRouter')
const { dashboardView, loginUser, registerUser, getRefreshToken, logoutUser } = require('../controllers/authControllers')
const { verifyToken } = require('../middleware/verifyToken')

router.get('/', verifyToken, dashboardView)
router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/token', getRefreshToken)
router.get('/logout', logoutUser)
router.use('/cookie', cookieRouter)


module.exports = router