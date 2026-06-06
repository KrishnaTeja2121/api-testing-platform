import { ApiRequest } from "@/types/api";

 export async function sendRequest(request:ApiRequest){
    const startTime=performance.now();
    const response= await fetch(request.url, {method:request.method,});// sends http request
    const data= await response.json();
    const endTime=performance.now();

    return {
        status:response.status,
        statusText:response.statusText,
        body:data,
        responseTime:Math.round(endTime-startTime),
    };
 }