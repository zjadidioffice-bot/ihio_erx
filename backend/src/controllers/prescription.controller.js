// const fetchPrescription = require("../services/ihio/prescription.service")

// async function getPrescription(req, res) {
//     try {
//         console.log("Prescription controller reached");
//         const {
//             cpartySessionId,
//             citizenSessionId,
//             printCode
//         } = req.body;

//         console.log("Prescription request:", {
//     cpartySessionId: Boolean(cpartySessionId),
//     citizenSessionId: Boolean(citizenSessionId),
//     printCode: Boolean(printCode),
//     terminalId: process.env.TERMINAL_ID,
//     tokenExists: Boolean(token),
//     clientIPAddress,
//     clientAgentInfo
// });

//         const prescription=await fetchPrescription({
//             cpartySessionId,
//             citizenSessionId,
//             printCode,
//             clientIPAddress:'127.0.0.1',
//             clientAgentInfo:req.get("user-agent")||"Unknown"
//         });

//         res.status(200).json({
//             success:true,
//             message:"prescription fetched successfully",
//             info:prescription
//         })
//     } catch (error) {
// res.status(502).json({
//     success:false,
//     message:error.message
// })
//     }
// }

// module.exports={getPrescription};


const fetchPrescription = require("../services/ihio/prescription.service");

async function getPrescription(req, res) {
    try {
        console.log("Prescription controller reached");

        const {
            cpartySessionId,
            citizenSessionId,
            printCode
        } = req.body;

        const clientIPAddress = "127.0.0.1";
        const clientAgentInfo = req.get("user-agent") || "Unknown";

        console.log("Prescription request:", {
            cpartySessionId: Boolean(cpartySessionId),
            citizenSessionId: Boolean(citizenSessionId),
            printCode: Boolean(printCode)
        });

        const prescription = await fetchPrescription({
            cpartySessionId,
            citizenSessionId,
            printCode,
            clientIPAddress,
            clientAgentInfo
        });

        res.status(200).json({
            success: true,
            message: "prescription fetched successfully",
            info: prescription
        });

    } catch (error) {
        console.error("Prescription error:", error.message);

        res.status(502).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = { getPrescription };
