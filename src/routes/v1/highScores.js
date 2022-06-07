const express = require('express');
const router = express.Router();
const highScores = require('../../controllers/highScores.controller')

router.get("/", highScores.findAll);
router.post("/copy", highScores.copyTable);
router.post("/drop", highScores.dropTable);

module.exports=router;