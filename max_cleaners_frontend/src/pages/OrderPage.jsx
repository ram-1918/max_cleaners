import { useRecoilState, useRecoilValue } from "recoil";
import { ordersListAtom } from "../recoil_state/atoms"
import OrdersListDisplay from "../components/OrdersListDisplay";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { Outlet } from "react-router";

export default function OrdersPage() {
    const [orderType, setOrderType] = useState('all orders');
    const orderslist = useRecoilValue(ordersListAtom);
    useEffect(() => {
        console.log('orders list after update', orderslist);
    }, [orderslist]);
    return (
        <div className="px-[10%] h-screen overflow-y-scroll flex flex-col justify-start items-start gap-4">
            <div className="w-[60%] flex justify-between items-center gap-2">
                <BackButton text='back' path='../' />
                <Header text="Order History" />
            </div>
            <div className="w-full h-fit flex justify-start items-center gap-4">
                {['all orders', 'active', 'completed'].map((item, idx) => <span key={idx} onClick={() => {setOrderType(item)}} style={{backgroundColor: orderType === item && '#E3F4F4'}} className="px-3 py-2 shadow rounded-lg capitalize cursor-pointer">{item}</span>)}
            </div>
            <OrderDetailCard orderType={orderType} />
            <Outlet />
        </div>
    )
}

function OrderDetailCard({orderType}) {
    const ordersData = useRecoilValue(ordersListAtom);
    const [filteredOrders, setFilteredOrders] = useState(ordersData);
    const order_type_mapper = {'all orders': '', 'active': 'placed', 'completed': 'completed'};

    useEffect(() => {
        const filtered_orders = ordersData.filter(item => item.status.includes(order_type_mapper[orderType]));
        setFilteredOrders(filtered_orders);
    }, [ordersData, orderType, setFilteredOrders]);

    return filteredOrders.length !== 0 ? <OrdersListDisplay TABLE_ROWS={filteredOrders} viewall={false} orderType={orderType} /> : "No Orders to display"
}