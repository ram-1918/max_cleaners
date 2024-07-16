import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../recoil_state/atoms";

export default function PrivateRoutes() {
    const is_loggedin = useRecoilValue(isLoggedInAtom);
    return is_loggedin ? <Outlet /> : <Navigate to='/auth/login' />
}