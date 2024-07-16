import Navbar from "./sections/Navbar";

import { Outlet } from 'react-router-dom';
import Footer from "./sections/Footer";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserAtom, currentUserIdAtom } from "./recoil_state/atoms";
import { API_URL, save_to_local, retrieve_from_local } from "./assets/utils";
import { useFetchData } from "./hooks/useFetchData";

export default function Home() {
    const [, setCurrentUser] = useRecoilState(currentUserAtom);
    const current_user_id = useRecoilValue(currentUserIdAtom);
    const { data:response_from_user_api, loading, fetch_data } = useFetchData();
    useEffect(() => {
        const url = `${API_URL}/user/${current_user_id}`;
        fetch_data(url);
        setCurrentUser(response_from_user_api);
    }, [setCurrentUser, current_user_id, loading]);

    if(loading) {
        return <div>Loading...</div>
    }

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