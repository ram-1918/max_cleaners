import { useRecoilValue } from "recoil";
import Header from "../components/Header";
import BarWithStatus from "../components/ProgressBar";
import { ordersListAtom } from "../recoil_state/atoms";
import { readableFormattedDate } from "../assets/utils";
import { CartItems } from "./Products";

export default function TrackActiveOrders({id = 1426}) {
    const orderslist = useRecoilValue(ordersListAtom);
    const idx = orderslist.findIndex(item => item.id === parseInt(id));
    const orderItem = orderslist[idx];
    return (
        <div className="px-10 space-y-2 bg-white py-5 rounded-xl z-10">
            <Header text="Track active orders" />
            <div style={{width: "30rem"}} className="flex justify-between items-start space-x-2 border border-sky-200 rounded-xl shadow p-2">
                <BarWithStatus status={orderItem.status} />
                <OrderDetailsDiv orderItem={orderItem} />
            </div>
        </div>
    )
}

function OrderDetailsDiv({orderItem}) {

    return (
        <div className="w-full h-[18rem] flex flex-col justify-between items-start space-y-2 text-sm">
            <div className="w-full px-2 flex justify-between items-center">
                <span className="text-lg font-semibold">Order#{orderItem.id}</span>
                <span className="text-blue-700 cursor-pointer hover:opacity-60">Need help?</span>
            </div>
            <div className="w-full h-fit flex flex-col justify-start items-start rounded-lg px-2">
                <span className="font-medium text-sky-700">Shipping Address</span>
                <span className="font-light capitalize">{orderItem.address}</span>
            </div>
            <div className="w-full flex flex-col flex-grow overflow-y-scroll rounded-lg bg-gray-50">
                <span className="px-2 py-1 font-medium text-sky-700">Items for wash</span>
                <div className="w-full flex flex-col flex-grow overflow-y-scroll px-2 rounded-lg">
                    <CartItems cart={orderItem.cart} save={false} displayLevel="low" />
                </div>
            </div>
            <div className="w-full flex justify-between items-center h-fit p-1">
                <span className="text-[0.7rem]">EST Total(taxes included): <span className="font-medium text-[0.9rem]">${orderItem.total_order_value}</span></span>
                {orderItem.status==='placed' && <span className="bg-red-500 px-2 py-1 rounded-lg">Cancel</span>}
            </div>
        </div>
    )
}

// Scheduled on {readableFormattedDate(new Date(orderItem.schedule.date))} at {orderItem.schedule.time_slot}