import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "../state/slice";

export default function PublicRoutes() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    console.log('Public', isLoggedIn);
    return !isLoggedIn ? <Outlet /> : <Navigate to='/home' />
}