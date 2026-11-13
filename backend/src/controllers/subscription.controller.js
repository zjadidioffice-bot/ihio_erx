const checkSubscriptionDeliver = require("../services/ihio/subscription-check-deliver.service")

async function checkDeliver(req, res) {
    try {
        const {
            cpartySessionId,
            citizenSessionId,
            trackingCode,
            subInfoWrapper
        } = req.body;

        const result = await checkSubscriptionDeliver({
            cpartySessionId,
            citizenSessionId,
            trackingCode,
            subInfoWrapper,
            clientAgentInfo: "127.0.0.1",
            clientAgentInfo: req.get("user-agent") || "Unknown"
        });
        res.status(200).json({
            success: true,
            message: "subscription checked successfully",
            info: result
        });
    } catch (error) {
        console.error("subscription check error", error.message)
        res.status(502).json({
            success:false,
            message:error.message
        });
    }
}

module.exports={checkDeliver}