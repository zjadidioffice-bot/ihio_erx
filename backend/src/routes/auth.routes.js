const express=require("express");
const router=express.Router();
const{getToken,openCparty,openCitizen}=require("../controllers/auth.controller")

router.post("/token",getToken)
router.post("/cparty-session",openCparty)
router.post("/citizen-session",openCitizen)
module.exports=router