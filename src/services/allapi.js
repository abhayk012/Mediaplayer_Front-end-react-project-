import { serverurl } from "./serverurl";
import { commonapi } from "./commonapi";

//1 Upload video

export const uploadVideo=async(reqBody)=>{
    return await commonapi('POST',  `${serverurl}/videos`,reqBody)
 }
 
 //2 Get all videos
  
 export const getAllVideos=async()=>{
   return await commonapi('GET',`${serverurl}/videos`,"")
 }

 //3 delete video
 export const deleteVideo=async(id)=>{
    return await commonapi('DELETE',`${serverurl}/videos/${id}`,{})
 }

 //4 add to watch history
 export const addhistory=async(videodetails)=>{
   return await commonapi('POST',`${serverurl}/history`,videodetails)
}

//5getallhistory
export const getallhistory=async()=>{
   return await commonapi('GET',`${serverurl}/history`,"")
}

//delete history
export const deletehistory=async(id)=>{
   return await commonapi('DELETE',`${serverurl}/history/${id}`,{})
}

//category
export const addcategory=async(reqBody)=>{
   return await commonapi('POST',`${serverurl}/category`,reqBody)
}

//view category
export const getAllCategory = async()=>{
   return await commonapi('GET',`${serverurl}/category`,"")
 }

 //delete category
 export const deletecategory=async(id)=>{
   return await commonapi('DELETE',`${serverurl}/category/${id}`,{})
}

export const getVideoDetailsByID=async(id)=>{
   return await commonapi('GET',`${serverurl}/video/${id}`,"")
 }

 export const updateCategory=async(id,body)=>{
   return await commonapi('PUT',`${serverurl}/category/${id}`,body)
 }