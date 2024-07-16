import { Navigate, Outlet } from "react-router-dom";
import { isLoggedInAtom } from "../recoil_state/atoms";
import { useRecoilValue } from "recoil";

export default function PublicRoutes() {
    const is_loggedin = useRecoilValue(isLoggedInAtom);
    return !is_loggedin ? <Outlet /> : <Navigate to='/home' />
}
