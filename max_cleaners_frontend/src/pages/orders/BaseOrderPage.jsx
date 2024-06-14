import { Outlet } from "react-router-dom";
import Topnav from "../../components/Topnav";

export default function BaseOrderPage() {
    return (
        <div>
            <Topnav />
            Base Order Form
            <Outlet />
        </div>
    )
}