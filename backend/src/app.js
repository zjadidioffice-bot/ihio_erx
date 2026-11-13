const express=require("express")
const cors=require("cors")
const authRoutes=require("./routes/auth.routes")
const prescriptionRoutes=require("./routes/prescription.routes")
const subscriptionRoutes=require("./routes/subscription.routes")
const app=express();
app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json())
app.use(authRoutes)
app.use(prescriptionRoutes)
app.use(subscriptionRoutes)


app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"backend is running successfully"
    });
});

module.exports=app;