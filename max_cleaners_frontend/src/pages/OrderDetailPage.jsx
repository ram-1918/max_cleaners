import { useNavigate, useParams } from "react-router";
import BaseCard from "../components/BaseCard";
import { calculate_addons } from "../assets/utils";
import { ordersListAtom } from "../recoil_state/atoms";
import { AddressDiv, LeftComponent, RightComponent } from "./OrderOverviewPage";
import { useRecoilState, useRecoilValue } from "recoil";
import TrackActiveOrders from "../sections/TrackActiveOrders";

const handle_cancel = (id, setOrdersList, navigate) => {
    setOrdersList(prev => {
        const idx = prev.findIndex(item => item.id === parseInt(id));
        const new_order_item = {...prev[idx], status: 'cancelled'};
        const temp = [...prev];
        console.log("hahaha", temp, new_order_item);
        temp[idx] = new_order_item;
        return temp;
    });
    navigate('../')
}

export default function OrderDetailPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [ordersList, setOrdersList] = useRecoilState(ordersListAtom);
    const orderItem = ordersList.filter(item => item.id === parseInt(id))?.[0];
    console.log("order item processed ", orderItem);
    return (
        <div className="w-full h-full fixed -top-2 left-0 right-0 flex items-center justify-center p-4 bg-[rgba(23,0,0,0.3)]">
            <div
            onClick={() => {
                navigate("../");
            }}
            className="w-full h-full absolute"
            ></div>
            <TrackActiveOrders id={1426} />
        </div>
    )
}

// Order info is enough
// Schedule, address, CartInfo
