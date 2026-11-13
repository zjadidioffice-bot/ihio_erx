const express=require("express")
const router=express.Router()

const{
    getPrescription
}=require("../controllers/prescription.controller")

router.post("/erx-core/v3/service/prescription/fetch/printcode/new",getPrescription)

module.exports=router