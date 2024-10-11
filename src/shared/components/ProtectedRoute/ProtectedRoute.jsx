import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoute(props) {
    const{children,roles} = props;
    const {isLogIn,userDetails}=useAuth();
    if(!isLogIn){
        return <Navigate to={"/login"} />
    }
    if (!roles.includes(userDetails().role)) {
        return <Navigate to={"/login"} />
}
    return children;
}
