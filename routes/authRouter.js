const router = require("express").Router()
const { dashboardView, loginUser, registerUser, getRefreshToken, logoutUser } = require('../controllers/authControllers')
const { verifyToken } = require('../middleware/verifyToken')

router.get('/', verifyToken, dashboardView)
router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/token', getRefreshToken)
router.delete('/logout', logoutUser)

module.exports = router