import { useNavigate, useParams } from "react-router";
import TrackActiveOrders from "../sections/TrackActiveOrders";

export default function OrderDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();
    return (
        <div className="w-full h-full fixed -top-2 left-0 right-0 flex items-center justify-center p-4 bg-[rgba(23,0,0,0.3)]">
            <div
            onClick={() => {
                navigate("../");
            }}
            className="w-full h-full absolute"
            ></div>
            <TrackActiveOrders id={id} />
        </div>
    )
}

// Order info is enough
// Schedule, address, CartInfo
