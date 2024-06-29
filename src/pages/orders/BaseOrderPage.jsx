import { Outlet } from "react-router-dom";
import Topnav from "../../components/Topnav";

export default function BaseOrderPage() {
    return (
        <div className="w-full h-screen">
            <Topnav />
            <Outlet />
        </div>
    )
}