const express=require("express")
const router=express.Router()

const{
    getPrescription
}=require("../controllers/prescription.controller")

router.post("/fetch",getPrescription)

module.exports=router