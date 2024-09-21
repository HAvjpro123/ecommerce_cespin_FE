import axios from "axios"
import { Navigate } from "react-router-dom"

export const API_BASE_URL= "https://eccomercecespinbe-production.up.railway.app/"
const jwt=localStorage.getItem("jwt")



export const api=axios.create({
    baseURL:API_BASE_URL,
    headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})