const fetchPrescription = require("../services/ihio/prescription.service")

async function getPrescription(req, res) {
    try {
        const {
            cpartySessionId,
            citizenSessionId,
            printCode
        } = req.body;

        const prescription=await fetchPrescription({
            cpartySessionId,
            citizenSessionId,
            printCode,
            clientIPAddress:'127.0.0.1',
            clientAgentInfo:req.get("user-agent"||"Unknown")
        });

        res.status(200).json({
            success:true,
            message:"prescription fetched successfully",
            info:prescription
        })
    } catch (error) {
res.status(502).json({
    success:false,
    message:error.message
})
    }
}

module.exports={getPrescription};