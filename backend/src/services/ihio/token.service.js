async function  fetchToken() {
    let token=null;
    const response=await fetch(process.env.API_TOKEN_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            terminalId:Number(process.env.TERMINAL_ID),
            username:process.env.API_USERNAME,
            password:process.env.API_PASSWORD
        })
    });
    const data=await response.json();
        if (!response.ok || data.resCode !== 1 || !data.info?.token) {
        throw new Error(data.resMessage || "Token request failed");
    }
    token= data.info.token;
    return token;
}

module.exports=fetchToken;