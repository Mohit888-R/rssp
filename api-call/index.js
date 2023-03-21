import Axios from "axios";

const URI ="http://localhost:3100/api/v1";
import Cookies from "js-cookie";


let headers = {
    "Content-Type": "application/json",
    srcFrom: "Desktop",
    eventName: "NA",
    userUniqueId: 0,
    sessionId:  typeof window != "undefined" ? localStorage.getItem("sessionId") : Cookies.get("sessionId") != undefined ? Cookies.get("sessionId") : "",
    devicePlatform: "Dashboard"
};


const MULTIPART_HEADER = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

Axios.interceptors.response.use(
    async (response) => {
        // console.log("response", response);
        // console.log("response", response?.data?.status);
        if (response?.data?.status === "SESSION_INVALID") {
            headers = { ...headers, eventName: "NA" };
            const API_ENDPOINT = URI + "/api/v1/api/auth/sessionid";
            const result = await Axios.get(API_ENDPOINT, { headers: { ...headers } });
            // console.log("response from session id", result);
            // console.log(
            //   "response from session id",
            //   result?.data?.dataObject?.sessionId
            // );
            if (typeof window !== "undefined") {
                localStorage.setItem("sessionId", result?.data?.dataObject?.sessionId);
            }
            Cookies.set("sessionId", result?.data?.dataObject?.sessionId);
            // console.log("response.config", response.config);
        }
        return response;
    },
    async (error) => {
        // console.log("error", error);
        return Promise.reject(error);
    }
);


export async function loginUser({email, phoneno, password}){
    headers = {...headers};

    const DEFAULT_HEADER = {headers:{...headers}};
    const url = `${URI}/login?email=${email}&phoneno=${phoneno}&password=${password}`;
    
    return await Axios.post(url, DEFAULT_HEADER).then((response)=>{
        return response.data;
    })
}


export async function registerUser(name, email, phoneNo, password, country, state, city, street, pincode){
    headers = {...headers};
    const DEFAULT_HEADER = {headers:{...headers}};

    const url = `${URI}/user/register?name=${name}&email=${email}&phoneno=${phoneNo}&password=${password}&country=${country}&state=${state}&city=${city}`;
    
    return await Axios.post(url,DEFAULT_HEADER).then((response)=>{
        return response.data;
    })

}