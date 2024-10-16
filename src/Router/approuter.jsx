import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Main from '../core/Main/Main'
import Products from '../components/products/products'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import ProtectedRoute from '../shared/components/ProtectedRoute/ProtectedRoute'
import Profile from '../components/Profile/Profile'





export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main />}>
        <Route path="/" element={<Products />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<ProtectedRoute roles={["admin","user"]}><Home /></ProtectedRoute>}/>
        <Route path="/profile" element={<Profile />}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
