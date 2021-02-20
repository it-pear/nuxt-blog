const {Router} = require('express')
const {login, createUser} = require('../controllers/auth.controller')
const router = Router()

// /api/auth/login
router.post('/admin/login', login)

// /api/auth/create
router.post('/admin/login', createUser)

module.exports = router

