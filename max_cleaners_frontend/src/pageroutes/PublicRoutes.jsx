import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes() {
    const [isLoggedin, ] = useState(true);
    console.log('Public', isLoggedin);
    return !isLoggedin ? <Outlet /> : <Navigate to='/home' />
}