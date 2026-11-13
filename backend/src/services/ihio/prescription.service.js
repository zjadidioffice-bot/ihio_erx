const fetchToken = require("./token.service")

async function fetchPrescription({
    cpartySessionId,
    citizenSessionId,
    printCode,
    clientIPAddress,
    clientAgentInfo
}) {
    console.log("Prescription service reached");
    const token = await fetchToken();
    console.log("Request data:", {
        cpartySessionIdExists: Boolean(cpartySessionId),
        citizenSessionIdExists: Boolean(citizenSessionId),
        printCodeExists: Boolean(printCode),
        cpartySessionIdType: typeof cpartySessionId,
        citizenSessionIdType: typeof citizenSessionId,
        printCodeType: typeof printCode
    });
    const response = await fetch(
        "http://test.ihio.gov.ir/erx-core/v3/service/prescription/fetch/printcode/new",
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
                cpartySessionId,
                citizenSessionId,
                printCode
            })
        }
    );
    const data = await response.json();
    console.log("Citizen API Response:", data);
    if (!response.ok || data.resCode !== 1 || !data.info) {
        throw new Error(data.resMessage || "fetching prescription failed");
    }
    return data.info
}

module.exports = fetchPrescription;