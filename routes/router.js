const router = require("express").Router()
const authRouter = require('./authRouter')
const cookieRouter = require('./cookieRouter')
const viewRouter = require('./viewRouter')

router.use('/api/v1/auth', authRouter)
router.use('/cookie', cookieRouter)
router.use('/', viewRouter)


module.exports = router