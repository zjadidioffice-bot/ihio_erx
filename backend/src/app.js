const express=require("express")
const cors=require("cors")
const authRoutes=require("./routes/auth.routes")
const app=express();

app.use(express.json())
app.use("/api/auth",authRoutes)
app.use(cors({
    origin:"http://localhost:5173"
}));

app.get("/api/health",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"backend is running successfully"
    });
});

module.exports=app;