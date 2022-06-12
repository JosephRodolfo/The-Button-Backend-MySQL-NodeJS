const express = require('express');
const router = express.Router();
const configuration = require('../../controllers/configuration.controller')
const {verifyToken} = require('../../middlewares/auth')


router.get('/:id', verifyToken, configuration.findById)
router.put('/:id', verifyToken, configuration.update)


module.exports = router