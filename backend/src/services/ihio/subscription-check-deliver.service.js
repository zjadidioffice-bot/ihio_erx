const fetchToken=require("./token.service")

async function checkSubscriptionDeliver({
    cpartySessionId,
    citizenSessionId,
    trackingCode,
    subInfoWrapper,
    clientIPAddress,
    clientAgentInfo
}) {
    const token=await fetchToken();

    const response=await fetch("http://test. ihio.gov.ir/erx-core/v3/service/subscription/check/deliver/new",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "terminalId":String(ProcessingInstruction.env.TERMINAL_ID),
                "token":token,
                "clientIPAddress":clientIPAddress,
                "clientAgentInfo":clientAgentInfo
            },
            body:JSON.stringify({
                cpartySessionId,
                citizenSessionId,
                trackingCode,
                subInfoWrapper
            })
        }
    );

    const data =await response.json()
    console.log("check deliver response",{
        httpStatus:response.status,
        resCode:data.resCode,
        resMessage:data.resMessage
    });
    if(!response.ok || data.resCode !==1 || !data.info)
    {
        throw new Error(data.resMessage || "checking prescription")
    }
    return data.info
}
module.exports=checkSubscriptionDeliver;