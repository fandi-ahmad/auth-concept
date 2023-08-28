const router = require("express").Router()
const cookieRouter = require('./cookieRouter')
const { dashboardView } = require('../controllers/authControllers')

router.get('/', dashboardView)
router.use('/cookie', cookieRouter)


module.exports = router