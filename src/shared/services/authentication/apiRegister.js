import axios from "axios";

import apiurl, { backendurl } from "../apiendpoint/apiendpoint";

export const apiRegister=async(datas)=>{
    const res = await axios.post(`${backendurl()}/auth/apiRegister`,datas)
    return res.data;
}