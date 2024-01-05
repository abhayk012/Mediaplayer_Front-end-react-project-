import axios from 'axios';
export const commonapi=async(httpMethod,url,body)=>{
    let reqConfig={
        method:httpMethod,
        url:url,
        data:body,
        Headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result;

    }).catch((error)=>{
        return error
    })
}