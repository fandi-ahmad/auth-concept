const router = require("express").Router()
const { dashboardView, loginUser, registerUser, getRefreshToken, logoutUser } = require('../controllers/authControllers')
const { verifyToken, addAuthorization } = require('../middleware/verifyToken')

router.get('/', addAuthorization, dashboardView)
router.post('/login', loginUser)
router.post('/register', registerUser)
router.delete('/logout', logoutUser)

module.exports = router