import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "../state/slice";
import {useSelector} from 'react-redux';

export default function PrivateRoutes() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    console.log('Private', isLoggedIn);
    return isLoggedIn ? <Outlet /> : <Navigate to='/auth/login' />
}