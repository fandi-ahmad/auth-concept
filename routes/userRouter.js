const router = require("express").Router()
const { getAllUser } = require('../controllers/userControllers')
const { verifyToken, addAuthorization } = require('../middleware/verifyToken')

router.get('/', addAuthorization, getAllUser)


module.exports = router