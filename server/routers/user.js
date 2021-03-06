const router = require('express').Router()
const UserController = require('../controllers/User')
router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleSign)
module.exports = router