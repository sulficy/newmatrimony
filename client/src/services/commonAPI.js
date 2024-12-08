import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody, reqHeader) => {
  
    let reqConfig = {
      method: httpMethod,
      url: url,
      data: reqBody,
      headers: reqHeader?reqHeader: {
        // Authorization: token ? `Bearer ${token}` : "",
        "Content-Type":"application/json"
      }
    };

  
  return await axios(reqConfig).then((res)=>{
    return res
  }).catch((err)=>{
    return err
  })
}
export default commonAPI

//     const response = await axios(config);
//     return response;
//   } catch (error) {
//     // Log error for debugging
//     console.error("Error in commonAPI:", error);
//     throw error; // This will be caught in the calling function
//   }
// };
