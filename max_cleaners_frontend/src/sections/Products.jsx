import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import two_piece_suit from '../assets/images/products/two_piece_suit.png'
import pants from '../assets/images/products/pants.png'
import PriceSpan from "../components/PriceSpan";
import { editIcon, hangerIcon, rightArrowIcon } from "../base/icons";
import Button from "../components/Button";
import { Outlet, useNavigate } from "react-router";
import BackButton from "../components/BackButton";
import { roundToTwo } from "../assets/utils";

export default function Products() {
    return (
        <div className="relative w-full h-full px-10 flex justify-between items-center">
            <div className="w-full h-screen overflow-scroll flex flex-col justify-start items-start space-y-2">
            <BackButton text="Modify date & time" path="/home/neworder/pick-a-schedule" />
                <Header text="Select apparels for laundary" />
                <ProductsGrid />
            </div>
            <OrderSummary />
            <Outlet />
        </div>
    );
}

function ProductsGrid() {
    return (
        <div className="w-[70%] h-fit p-2 grid grid-flow-row grid-cols-5 gap-4">
            <ProductCard image={two_piece_suit} title="two piece suit" cost="10.99" />
            <ProductCard image={pants} title="Pants" cost="4.99" />
        </div>
    )
}

function OrderSummary() {
    return (
        <div className="absolute top-0 right-10 w-[30%] h-[85%] border-l px-4 flex flex-col justify-between items-center">
            <div className="w-full h-full ">
                <Header text="Order Summary" />
                <hr></hr>
                <div className="py-4 divide-y divide-gray-200 space-y-2">
                    <SingleOrderItem
                        title="Shirt"
                        count={1}
                        amount={3.99}
                        total_addons={1}
                    />
                    <SingleOrderItem
                        title="Pants"
                        count={2}
                        amount={4.99}
                        total_addons={2}
                    />
                </div>
            </div>
            <SummarySpan total_amount={13.45} total_count={3} />
        </div>
    )
}

export function SingleOrderItem({ title, count, amount, total_addons=0}) {
    return (
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <span className="text-xl font-medium">{title}</span>
                <span>{count} x <PriceSpan amount={amount} /></span>
                <PriceSpan amount={roundToTwo(count * amount)} />
            </div>
            <div className="w-full flex justify-between items-center">
                <span>{total_addons} Add-ons</span>
                <span>{editIcon} Manage</span>
            </div>
        </div>
    )
}

function SummarySpan({ total_amount, total_count }) {
    const navigate = useNavigate();
    return (
        <div className="w-full flex flex-col justify-start items-end space-y-1 border-t py-2">
            <div className="flex justify-center items-center space-x-1">
                <div className="flex flex-col justify-start items-end">
                    <span>Item Count: </span>
                    <span className="text-lg font-light space-x-2">
                        Estimated subtotal:
                    </span>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <span className="text-lg font-semibold">{total_count} garments</span>
                    <span className="text-xl font-semibold">
                        <PriceSpan amount={total_amount} />
                    </span>
                </div>
            </div>
            <Button onClick={() => {navigate("/home/neworder/overview")}} text="Checkout" icon={rightArrowIcon} />
        </div>
    )
}