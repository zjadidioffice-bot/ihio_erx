const express=require("express");
const router=express.Router();
const{getToken,openCparty}=require("../controllers/auth.controller")

router.post("/token",getToken)
router.post("/cparty-session",openCparty)
module.exports=router