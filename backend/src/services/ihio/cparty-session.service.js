const fetchToken = require("./token.service")

async function openCpartySession({
    cpartyUsername,
    cpartyPassword,
    clientIPAddress,
    clientAgentInfo
}) {
    const token = await fetchToken();


    // console.log("Terminal ID exists:", Boolean(process.env.TERMINAL_ID));
    // console.log("Token received:", Boolean(token));
    // console.log("Client IP:", clientIPAddress);
    // console.log("Client Agent:", clientAgentInfo);
    // console.log("Username received:", Boolean(cpartyUsername));
    // console.log("Password received:", Boolean(cpartyPassword));

    const response = await fetch(
        "http://test.ihio.gov.ir/erx-core/v3/service/auth/session/cparty/open",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "terminalId": String(process.env.TERMINAL_ID),
                "token": token,
                "clientIPAddress": clientIPAddress,
                "clientAgentInfo": clientAgentInfo
            },
            body: JSON.stringify({
                cpartyUsername,
                cpartyPassword
            })
        }
    );
    const data = await response.json();
    if (!response.ok || data.resCode !== 1 || !data.info?.sessionId) {
        throw new Error(data.resMessage || "Opening doctor session failed");
    }
    return data.info
}

module.exports = openCpartySession;