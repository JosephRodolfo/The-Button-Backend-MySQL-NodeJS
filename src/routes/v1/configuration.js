const express = require('express');
const router = express.Router();
const configuration = require('../../controllers/configuration.controller')

router.get('/:id', configuration.findById)
router.put('/:id', configuration.update)
module.exports = router