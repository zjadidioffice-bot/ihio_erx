const express=require("express");
const router=express.Router()

const{checkDeliver}=require("../controllers/subscription.controller")
router.post("/check-deliver",checkDeliver)
module.exports=router;