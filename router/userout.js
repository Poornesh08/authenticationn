const express = require("express");
const userHandler=require('../controller/userctlr')

const router= express.Router();

router.post("/",userHandler.handelUserSignup)


module.exports=router;
