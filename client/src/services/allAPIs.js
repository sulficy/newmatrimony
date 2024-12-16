import { commonAPI } from "../services/commonAPI"
import { serverUrl } from "../services/serverUrl"

export const registerAPI = async(reqBody) => {
    return await commonAPI('post',`${serverUrl}/api/register`,reqBody,"")
}
export const loginAPI = async(reqBody) => {
    return await commonAPI('post',`${serverUrl}/api/login`,reqBody,"")
}

//Add doctors
export const addDoctorAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('post',`${serverUrl}/api/dashboard/add-doctors`,reqBody,reqHeader)
}

//get all doctors

export const getDoctorAPI = async(reqHeader)=>{
    return await commonAPI('get',`${serverUrl}/api/dashboard/get-doctors`,"",reqHeader)
}

//Add review
export const addReviewAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('post',`${serverUrl}/api/review`,reqBody,reqHeader)
}


//add appointment
export const addappointment = async(reqBody,reqHeader)=>{
    return await commonAPI('post',`${serverUrl}/api/appointment`,reqBody,reqHeader)
}
//get appopintment
export const getAppointAPI = async(reqHeader)=>{
    return await commonAPI('get',`${serverUrl}/api/getappoint`,"",reqHeader)
}

