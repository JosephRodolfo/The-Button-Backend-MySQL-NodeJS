const express = require('express');
const router = express.Router();
// const EndDate = require('../models/EndDate.model')
const EndDate = require('../controllers/EndDate.controller')




router.get("/:id", EndDate.findOne);





module.exports=router;