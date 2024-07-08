import { useRecoilValue } from "recoil";
import { ordersListAtom } from "../recoil_state/atoms";
import Activity from "../sections/Activity";
import OrdersOverview from "../sections/OrdersOverview";
import TrackActiveOrders from "../sections/TrackActiveOrders";

export default function HomePage() {
    const ordersList = useRecoilValue(ordersListAtom);
    console.log(ordersList);
    return (
        <>
            <Activity />
            <TrackActiveOrders />
            <OrdersOverview />
        </>
    )
}