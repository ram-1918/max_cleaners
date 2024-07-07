import { useRecoilValue } from "recoil";
import { rightArrowIcon } from "../base/icons";
import Header from "../components/Header";
import OrdersListDisplay from "../components/OrdersListDisplay";
import { ordersListAtom } from "../recoil_state/atoms";

const TABLE_HEAD = ["Order Id", "Order Date", "Status", "Item Count", "cost", "Action"];
const TABLE_ROWS = [
    {
        id: 1234,
        created_at: '28th June, 2024',
        status: 'placed',
        user: 1,
        address: "2649 wildberry ct, Edison, NJ, 08817",
        cart: {
            capacity: 12,
            total_price: 34.43,
            products: []
        },
        schedule: {
            date: "25th July, 2024",
            time_slot: "2PM-3PM"
        }
    }
];

const status_span = (bgcolor) => <div style={{backgroundColor: bgcolor}} className="w-3 h-3 rounded-full"></div>;

const status_mapper = {
    "order sent": status_span("#5B8FB9"),
    "in progress": status_span("#FFA62B"),
    "delivered": status_span("#0E8388")
};



export default function OrdersOverview() {
    const ordersData = useRecoilValue(ordersListAtom);

    return (
        <div className="w-full px-10 space-y-2">
            <Header text="Recent Orders" />
            <OrdersListDisplay TABLE_ROWS={ordersData.slice(0, 3)} />
        </div>
    )
}

// function Top3Records({TABLE_ROWS}) {
//     const cell_style = "p-2 text-md font-normal";
//     const head_style = "text-lg font-semibold w-44 border-black px-2 py-1 capitalize"
//     return (
//         <table className="w-full min-w-max table-auto text-left">
//             <thead>
//                 <tr className="bg-gray-50 divide-x divide-gray-200 text-gray-600">
//                     {TABLE_HEAD.map((item, idx) => <th className={head_style} key={idx}>{item}</th>)}
//                 </tr>
//             </thead>
//             <tbody className="">
//                 {TABLE_ROWS.map(
//                     (item, idx) => (
//                     <tr key={idx} className="border-b border-gray-200 text-gray-500">
//                         <td className={cell_style}>{item.id}</td>
//                         <td className={cell_style}>{item.date}</td>
//                         <td className={`${cell_style} flex justify-start items-center space-x-2 capitalize`}>{status_mapper[item.status]} <span>{item.status}</span></td>
//                         <td className={cell_style}>{item.count}</td>
//                         <td className={`${cell_style} before:content-['$'] before:text-md before:font-semibold p-2`}>{item.cost}</td>
//                         <td className={`${cell_style} cursor-pointer hover:scale-110 transition duration ease-linear hover:font-medium`}>Manage {rightArrowIcon}</td>
//                     </tr>
//                     )
//                 )}
//                 <tr className="text-right text-gray-600">
//                     <td>{" "}</td>
//                     <td>{" "}</td>
//                     <td>{" "}</td>
//                     <td>{" "}</td>
//                     <td>{" "}</td>
//                     <td className={`${cell_style} cursor-pointer hover:scale-110 transition duration ease-linear hover:font-medium`}>View all {rightArrowIcon}</td>
//                 </tr>
//             </tbody>
//         </table>
//     )
// }