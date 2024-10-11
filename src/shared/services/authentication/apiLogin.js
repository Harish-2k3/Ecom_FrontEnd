import axios from "axios";
import apiurl, { backendurl } from "../apiendpoint/apiendpoint";

export const apiLogin=async(datas)=>{
    const res = await axios.post(`${backendurl()}/auth/apiLogin`,datas)
    return res.data;
}