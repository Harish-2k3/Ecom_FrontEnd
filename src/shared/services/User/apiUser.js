import axios from "axios";
import apiurl, { backendurl } from "../apiendpoint/apiendpoint";
import { gettoken } from "../Jwt/Token";


export const apigetUser = async () => {
    const res = await axios.get(`${backendurl()}/users/getuser`,{headers:{Authorization:`Bearer ${gettoken()}`}})
    return res.data;
}

export const apiupdateuser = async (datas) => {
    console.log(datas)
    const formdata = new FormData();
    formdata.append("_id",datas._id)
    formdata.append("email",datas.email)
    formdata.append("name",datas.name)
    formdata.append('profileimage',datas.profileimage)
    const res = await axios.put(`${backendurl()}/users/updateuser`,formdata,{headers:{Authorization:`Bearer ${gettoken()}`}})
    return res.data
}

