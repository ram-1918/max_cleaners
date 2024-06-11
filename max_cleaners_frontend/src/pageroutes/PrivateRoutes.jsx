import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
    const [isLoggedin, ] = useState(true);
    console.log('Private', isLoggedin);
    return isLoggedin ? <Outlet /> : <Navigate to='/auth/login' />
}