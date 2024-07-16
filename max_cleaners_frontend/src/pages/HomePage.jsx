import { useEffect } from "react";
import { useFetch } from "../hooks/useFetchData";
import { currentUserAtom, currentUserLoginInfoAtom } from "../recoil_state/atoms";
import { API_URL } from "../assets/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import Activity from "../sections/Activity";
import OrdersOverview from "../sections/OrdersOverview";
import TrackActiveOrders from "../sections/TrackActiveOrders";

export default function HomePage() {
    return (
        <>
            <Activity />
            <TrackActiveOrders />
            <OrdersOverview />
        </>
    )
}