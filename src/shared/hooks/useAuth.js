import { json } from "react-router-dom";
import { create } from "zustand";

const useAuth = create((set)=>({
    isLogIn :localStorage.getItem("access_token")!= null?true:false,
    setToken :(token)=>set((state)=>{
        console.log(token)
        localStorage.setItem("access_token",token)
        return ({isLogIn:true})
    }),
    userDetails:()=>{
        var token = localStorage.getItem("access_token")
        if(token!=null){
            const decode = JSON.parse(window.atob(token.split('.')[1]))
            return decode;
        }
        else{
            return null;
        }
    },

    logout:()=>set(()=>{
        localStorage.removeItem("access_token");
        return ({isLogIn:false})
    })
}))

export default useAuth;