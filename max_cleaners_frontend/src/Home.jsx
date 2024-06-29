import Navbar from "./sections/Navbar";
import Activity from "./sections/Activity";
import OrdersOverview from "./sections/OrdersOverview";

import { Outlet } from 'react-router-dom';
import Footer from "./sections/Footer";

export default function Home() {
    return (
        <div className="space-y-10">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}