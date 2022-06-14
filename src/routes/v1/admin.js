const express = require('express');
const router = express.Router();
const admin = require('../../controllers/admin.controller')


// router.post('/register', admin.registerAdmin)
router.post('/login', admin.loginAdmin)
router.get('/logout', admin.logoutAdmin)

module.exports = router