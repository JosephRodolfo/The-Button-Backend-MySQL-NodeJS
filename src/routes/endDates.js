const express = require('express');
const router = express.Router();
const endDates = require('../controllers/endDates.controller')




router.get("/:id", endDates.findOne);
router.post("/", endDates.create);
router.get("/", endDates.findAll);




module.exports=router;