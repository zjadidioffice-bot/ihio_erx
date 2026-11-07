const openCpartySession = require("../services/ihio/cparty-session.service");
const fetchToken = require("../services/ihio/token.service")

async function getToken(req, res) {
    try {
        const token = await fetchToken()
        res.status(200).json({
            success: true,
            message: "token recieved successfully",
            tokenRecievd: Boolean(token)
        });
    } catch (error) {
        res.status(502).json({
            success: false,
            message: error.message
        });
    }
}

async function openCparty(req, res) {
    try {
        const { cpartyUsername, cpartyPassword } = req.body;
        console.log("Client IP:", req.ip);
        console.log("Client Agent:", req.get("user-agent"));
        const session = await openCpartySession({
            cpartyUsername,
            cpartyPassword,
            clientIPAddress: "127.0.0.1",
            clientAgentInfo: req.get("user-agent") || "Unknown"
        });
        res.status(200).json({
            success: true,
            message: "doctor session opened successfully",
            info: session
        });
    } catch (error) {
        res.status(502).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    getToken
    ,
    openCparty
}