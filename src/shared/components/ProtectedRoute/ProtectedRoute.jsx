import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoute(props) {
    const{children,roles} = props;
    console.log(roles)
    const {isLogIn,userDetails}=useAuth();
    console.log(roles.includes(userDetails().role))
    if(!isLogIn){
        return <Navigate to={"/login"} />
    }
    if (!roles.includes(userDetails().role)) {
        return <Navigate to={"/login"} />
}
    return children;
}
