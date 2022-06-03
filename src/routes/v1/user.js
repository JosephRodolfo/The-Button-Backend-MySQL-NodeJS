const express = require('express');
const router = express.Router();
const user = require('../../controllers/user.controller')

router.get("/", user.findAll);
router.post("/", user.create);
router.delete("/", user.deleteAll);


module.exports=router;
