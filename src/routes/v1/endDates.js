const express = require('express');
const router = express.Router();
// const endDates = require('../controllers/endDates.controller')
const endDates = require('../../controllers/endDates.controller')



router.get("/:id", endDates.findOne);
//creates one new end date with a random time in the future
router.post("/", endDates.create);
router.get("/", endDates.findAll);
//gets most recent end date
router.get("/last/date", endDates.findLastCreated)




module.exports=router;