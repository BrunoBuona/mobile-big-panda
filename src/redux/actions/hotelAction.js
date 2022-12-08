// Importamos los items de REDUX
import { createAsyncThunk} from "@reduxjs/toolkit";
// Importamos AXIOS para vincular FRONT y BACK
import axios from "axios";
// Llamamos a una URL estandarizada en API para acoplarnos al DRY
import {BASE_URL} from "../../api/url";

const getHotels = createAsyncThunk('getHotels', async()=>{
    const respuesta = await axios.get(`${BASE_URL}/api/hotels/`)
    return {
        hotelList: respuesta.data.response
    }
})
const getHotelName = createAsyncThunk('getHotelName', async(name)=>{
    const respuesta = await axios.get(`${BASE_URL}/api/hotels/?name=${name}`)
    return {
        hotelList: respuesta.data.response
    }
})
const getHotelOrder = createAsyncThunk('getHotelByFilter',async(filter)=>{
    try{
    const respuesta = await axios.get(`${BASE_URL}/api/hotels/?name=${filter.name}&order=${filter.order}`)
    return{
        hotelList: respuesta.data.response
    }}catch(error){
       return{
        hotelList: error.response.data.response
       }
    }
})

const hotelAction = {
    getHotels,
    getHotelName,
    getHotelOrder
}

export default hotelAction

