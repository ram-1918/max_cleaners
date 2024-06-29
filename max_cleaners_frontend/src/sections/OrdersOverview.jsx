import { rightArrowIcon } from "../base/icons";
import Header from "../components/Header";

const TABLE_HEAD = ["Order Id", "Order Date", "Status", "Item Count", "cost", "Action"];
const TABLE_ROWS = [
    {
        id: 1234,
        date: '28th June, 2024',
        status: 'order sent',
        count: 12,
        cost: 10.32
    },
    {
        id: 1215,
        date: '27th June, 2024',
        status: 'in progress',
        count: 15,
        cost: 12.99
    },
    {
        id: 1025,
        date: '24th June, 2024',
        status: 'delivered',
        count: 23,
        cost: 34.42
    },
];

const status_span = (bgcolor) => <div style={{backgroundColor: bgcolor}} className="w-3 h-3 rounded-full"></div>;

const status_mapper = {
    "order sent": status_span("#5B8FB9"),
    "in progress": status_span("#FFA62B"),
    "delivered": status_span("#0E8388")
};


export default function OrdersOverview() {
    return (
        <div className="px-10 space-y-2">
            <Header text="Recent Orders" />
            <Top3Records />
        </div>
    )
}

function Top3Records() {
    const cell_style = "p-2 text-md font-normal";
    const head_style = "text-lg font-semibold w-44 border-black px-2 py-1 capitalize"
    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
                <tr className="bg-gray-50 divide-x divide-gray-200 text-gray-600">
                    {TABLE_HEAD.map((item, idx) => <th className={head_style} key={idx}>{item}</th>)}
                </tr>
            </thead>
            <tbody className="">
                {TABLE_ROWS.map(
                    item => (
                    <tr className="border-b border-gray-200 text-gray-500">
                        <td className={cell_style}>{item.id}</td>
                        <td className={cell_style}>{item.date}</td>
                        <td className={`${cell_style} flex justify-start items-center space-x-2 capitalize`}>{status_mapper[item.status]} <span>{item.status}</span></td>
                        <td className={cell_style}>{item.count}</td>
                        <td className={`${cell_style} before:content-['$'] before:text-md before:font-semibold p-2`}>{item.cost}</td>
                        <td className={`${cell_style} cursor-pointer hover:scale-110 transition duration ease-linear hover:font-medium`}>Manage {rightArrowIcon}</td>
                    </tr>
                    )
                )}
                <tr className="text-right text-gray-600">
                    <td>{" "}</td>
                    <td>{" "}</td>
                    <td>{" "}</td>
                    <td>{" "}</td>
                    <td>{" "}</td>
                    <td className={`${cell_style} cursor-pointer hover:scale-110 transition duration ease-linear hover:font-medium`}>View all {rightArrowIcon}</td>
                </tr>
            </tbody>
        </table>
    )
}