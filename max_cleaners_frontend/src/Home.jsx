import Navbar from "./sections/Navbar";

import { Outlet } from 'react-router-dom';
import Footer from "./sections/Footer";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "./recoil_state/atoms";
import { save_to_local } from "./assets/utils";

const user_info = {
    fullname: "Ram Chandra",
    email: "crc.5453@gmail.com",
    phone: "716-617-1918",
    password: "asf4y6flr49",
    location: {
        city: "Edison",
        state: "NJ"
    },
    isLoaded: true,
    addresses: [
        {
            id: 1,
            primary: true,
            address: "2649 Wildberry ct, Edison, NJ, 08817"
        },
        {
            id: 2,
            primary: false,
            address: "1 Ethel Rd, Edison, NJ, 08820"
        },
    ]
}

export default function Home() {
    const [, setCurrentUser] = useRecoilState(currentUserAtom);
    useEffect(() => {
        console.log("API call to retrieve User Info");
        // Set user details with the data from API
        setCurrentUser(user_info);
        save_to_local('user', user_info);
    }, [setCurrentUser])
    return (
        <div className="h-screen space-y-10">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

/*
> Location (Current Location) (update) (Explore?)
> Notification Queue (Address & location updates, order updates)
> User Profile (CRUD) (Address)
> Serivces (JSON)(Presentation)
> Products (JSON)(Presentation)
> Cart (CRUD)
> Orders (Format) (CRUD) (Recent 3)
*/