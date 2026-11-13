const express=require("express");
const router=express.Router();
const{getToken,openCparty,openCitizen}=require("../controllers/auth.controller")

// router.post("/token",getToken)
// router.post("/cparty-session",openCparty)
// router.post("/citizen-session",openCitizen)

router.post("/erx-core/v3/service/auth/token/fetch",getToken)
router.post("/erx-core/v3/service/auth/session/cparty/open",openCparty)
router.post("/erx-core/v3/service/auth/session/citizen/open",openCitizen)

module.exports=router