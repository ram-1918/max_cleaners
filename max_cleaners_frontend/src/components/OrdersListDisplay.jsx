import { useNavigate } from "react-router";
import { readableFormattedDate } from "../assets/utils";
import { rightArrowIcon } from "../base/icons";
import Header from "../components/Header";

const TABLE_HEAD = [
  "order id",
  "address",
  "garments",
  "total amount",
  "pickup schedule",
  "expected delivery",
  "Status",
  "Action"
];

const status_span = (bgcolor, text) => (
  <span
    style={{ backgroundColor: bgcolor }}
    className="px-2 py-1 rounded-full text-sm shadow capitalize"
  >
    {text}
  </span>
);

const status_mapper = {
  placed: status_span("#E9F6FF", "pending"),
  processing: status_span("#F5F5DC", "processing"),
  completed: status_span("#D2E9E9", "completed"),
  cancelled: status_span("#FFEFEF", "cancelled"),
};
// E3F4F4; C4DFDF;; F8F6F4; ECE2E1
export default function OrdersListDisplay({
  TABLE_ROWS,
  viewall = true
}) {
  const navigate = useNavigate();
  const cell_style = "p-2 text-md capitalize font-medium px-2";
  const head_style =
    "text-md font-light leading-6 tracking-wide max-w-64 border-black px-2 py-2 capitalize";
  return (
    <table
      style={{ backgroundColor: "" }}
      className="w-full min-w-max table-auto text-left overflow-hidden shadow rounded-lg"
    >
      <thead className="rounded-full">
        <tr className="bg-[#474E68] text-white">
          {TABLE_HEAD.map((item, idx) => (
            <th className={head_style} key={idx}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full">
        {TABLE_ROWS.map((item, idx) => (
          <tr key={idx} className="border-b-0 border-gray-200 text-gray-500">
            <td className={cell_style}>{item.id}</td>
            <td className={`${cell_style} before:text-md before:font-semibold`}>
              <p className="w-96 overflow-hidden text-ellipsis whitespace-nowrap">
                {item.address}
              </p>
            </td>
            {/* <td className={cell_style}>{item.created_at}</td> */}
            <td className={cell_style}>{item.cart.capacity}</td>
            <td
              className={`${cell_style} before:content-['$'] before:text-md before:font-semibold p-2`}
            >
              {item.total_order_value}
            </td>
            <td
              className={`${cell_style} overflow-hidden text-ellipses whitespace-nowrap`}
            >{`${readableFormattedDate(new Date(item.schedule.date))} (${
              item.schedule.time_slot
            })`}</td>
            <td
              className={`${cell_style} overflow-hidden text-ellipses whitespace-nowrap`}
            >{`${readableFormattedDate(new Date(item.schedule.date))}`}</td>
            <td className={`${cell_style} font-bold capitalize`}>
              {status_mapper[item.status]}
            </td>
            <td onClick={() => {navigate(`/home/orders/${item.id}/detail`)}} className={`${cell_style} cursor-pointer underline underline-offset-2 hover:scale-110 transition duration ease-linear hover:font-medium`}>Details</td>
          </tr>
        ))}
        {viewall && (
          <tr className="text-right text-gray-600">
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td
              onClick={() => {
                navigate("/home/orders");
              }}
              className={`${cell_style} cursor-pointer hover:scale-110 transition duration ease-linear hover:font-medium`}
            >
              View all {rightArrowIcon}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
