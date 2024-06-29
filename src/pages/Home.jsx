import { useState } from "react";
import Topnav from "../components/Topnav";
import SideNavBar from "../components/SideNavBar";
import { editIcon, rightArrowIcon, rightCaretIcon } from "../components/base/BaseIcons";
import { Navigate, useNavigate } from "react-router-dom";

const overviewList = [
    {
        idx: 1,
        title: "total available credits",
        value: '0.00'
    },
    {
        idx: 2,
        title: "orders placed",
        value: '3'
    },
    {
        idx: 3,
        title: "loyalty points",
        value: '152'
    },
    {
        idx: 4,
        title: "refer you friend",
        value: '+'
    },

];

const OrdersList = [
    {
        idx: 1,
        name: "Order 14061014",
        status: 'washing initiated',
        startdate: 'June 14, 2024',
        enddate: 'June 14, 2024',
        price: "23.45"
    },
    {
        idx: 2,
        name: "clothes wash",
        status: 'completed',
        startdate: 'June 6, 2024',
        enddate: 'June 7, 2024',
        price: '10.30'
    },
    {
        idx: 3,
        name: "clothes for dry cleaning",
        status: 'canceled',
        startdate: 'May 30, 2024',
        enddate: 'June 1, 2024',
        price: '40.43'
    },

];


export default function Home() {
    const [sideNavActive, setSideNavActive] = useState(false);
    const props = {
        sideNavActive:sideNavActive, 
        setSideNavActive:setSideNavActive
    }
    return (
        <div className="relative flex flex-row justify-center items-center">
            <SideNavBar {...props} />
            {sideNavActive && <div onClick={() => setSideNavActive(false)} className="absolute w-full h-full"></div>}
            <MainDiv {...props} />
        </div>
    );
}

const MainDiv = ({...props}) => {
    return (
        <div className={`${props.sideNavActive && 'bg-[rgba(0,0,0,0.4)]'} w-full h-screen flex flex-col justify-start items-center space-y-5 bg-gray-100 overflow-x-hidden`}>
            <Topnav {...props} />
            <div className="w-full h-fit p-4 space-y-4">
                <span className="w-full text-4xl font-extralight">Overview</span>
                <div className="w-full h-fit flex flex-row justify-start items-center flex-wrap space-x-5">
                    <StartOrderDiv  />
                    {overviewList.map(item => <OverviewCard key={item.idx} title={item.title} value={item.value} />)}
                </div>
            </div>
            <div className="w-full h-fit p-4 flex flex-col justify-start items-start">
                <span className="w-full text-4xl font-extralight py-4">Latest Orders</span>
                <div className="w-full h-fit flex flex-col justify-start items-start divide-y-2 rounded-xl shadow-lg overflow-hidden bg-red-100">
                    <OrderRecord order_name="order name" status="status" startdate="ordered on" enddate="delivered on" price="est price" manage='manage' isHeader={true} />
                    {OrdersList.map(item => <OrderRecord key={item.idx} order_name={item.name} status={item.status} startdate={item.startdate} enddate={item.enddate} price={item.price} />)}
                </div>
                <span className="w-full text-right p-2 ">View All {rightCaretIcon}</span>
            </div>
        </div>
    )
}

const OverviewCard = ({value, title}) => {
    return (
        <div className="w-64 h-36 flex flex-col justify-center items-center space-y-2 border rounded-2xl shadow-lg cursor-pointer leading-7 tracking-wide bg-white">
            <span className="text-4xl">{value}</span>
            <span className="text-md font-light capitalize">{title}</span>
        </div>
    );
};

const StartOrderDiv = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/order/new')} className="w-64 h-36 flex flex-col justify-center items-center space-y-2 border rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all ease-linear duration-150 cursor-pointer leading-7 tracking-wide bg-sky-600 text-yellow-300">
            <span className="text-xl font-medium capitalize">Start a new order</span>
            <span className="text-md font-light capitalize">Click here {rightArrowIcon('yellow')}</span>
        </div>
    );
};

const OrderRecord = ({order_name, status, startdate, enddate, price, manage='', isHeader=false}) => {
    return (
        <div style={{fontWeight: isHeader && "bold"}} className={`${isHeader ? 'py-2': 'py-1 hover:bg-gray-100'} w-full px-2 flex flex-row justify-between items-center leading-7 tracking-wide bg-white cursor-pointer`}>
            <span className="w-96 capitalize">{order_name}</span>
            <span className="w-56 capitalize">{status}</span>
            <span className="w-44 capitalize">{startdate}</span>
            <span className="w-44 capitalize">{enddate}</span>
            <span className="w-32 capitalize">{price}</span>
            <span className="w-32 capitalize">{manage ? 'manage': editIcon}</span>
        </div> 
    )
}

/*


<div className="px-[5%] w-full h-full flex">
    <div className="w-[20%] h-full border">Filters</div>
    <div className="w-[80%] h-full border">Products</div>

    <div className="w-64 h-72 border rounded-xl shadow hover:shadow-lg cursor-pointer bg-gray-50">Home</div>
                <div className="w-64 h-72 border rounded-xl shadow hover:shadow-lg cursor-pointer bg-gray-50">Pickup</div>
</div>

*/