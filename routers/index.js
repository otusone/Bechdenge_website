const express = require('express');
const router = express.Router();



const user = require("./user")
router.use('/user', user)


const portfolio = require('./portfolio')
router.use("/portfolio", portfolio);



module.exports = router;