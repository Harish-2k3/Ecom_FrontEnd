import axios from "axios";
import apiurl from "../apiendpoint/apiendpoint";


export const getallproducts=async()=>{
    const res = await axios.get(`${apiurl()}/products/search?q=phone`)
    return res.data;
}