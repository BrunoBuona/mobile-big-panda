import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../api/url";

const getToken= createAsyncThunk('getToken', async(tokenx)=>{
    try{
    let headers = {headers:{'Authorization': `Bearer ${tokenx}`}}
    let token = await axios.post(`${BASE_URL}/api/auth/token`, {}, headers)
    let res = token.data.response.user
    return(res)
    }catch(err){
        console.log(err)
    }
})

const logOut = createAsyncThunk('logOut', async(token) =>{
    let url = `${BASE_URL}/api/auth/signout`
    let headers = {headers: {'Authorization' : `Bearer ${token}`}}
    try {
        let user = await axios.put(url, null, headers)
        return{
            success: true,
            response: user.data.message
          }
        }catch(error){
          console.log(error.response)
          return{
            success: false,
            response: error.resp.data.response
          }
        }
})

const loginAction = {
   getToken,
   logOut,
}

export default loginAction