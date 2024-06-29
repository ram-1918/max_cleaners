import { locationIcon } from "../base/icons";
import BaseCard from "../components/BaseCard";
import Header from "../components/Header";
import { SingleOrderItem } from "../sections/Products";

export default function OrderOverviewPage() {
    return (
        <BaseCard 
            title="Order Overview"
            component1={<LeftComponent />}
            component2={<RightComponent />}
            nextPagePath="/order-confirmation"
            nextPageText="Place Order"
            prevPagePath="/home/neworder/select-items/"
            prevPageText="Modify items"
        />
    )
}

function LeftComponent() {
    return (
        <div className="w-[60%] h-96 p-2 overflow-y-scroll">
            <span className="py-2 text-lg font-medium">Item Count: {12}</span>
            <div className="w-full flex flex-col justify-start items-start space-y-1 divide-y divide-gray-200 px-4">
                <SingleOrderItem 
                    title="Shirt"
                    count={3}
                    amount={3.99}
                    total_addons={3}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
                <SingleOrderItem 
                    title="pant"
                    count={5}
                    amount={4.99}
                    total_addons={1}
                />
            </div>
        </div>
    )
}

function RightComponent({total=10}) {
    const address = '2649 Wildberry CT, Edison, New Jersey, 08817'
    return (
        <div className="w-[40%] space-y-4">
            <div className="flex flex-col justify-start items-start space-y-1">
                <span className="text-xl font-semibold">Pick up at: </span>
                <span>{locationIcon} {address} <span className="text-sm text-blue-500 underline underline-offset-2">Change</span> </span>
            </div>
            <div className="w-full space-y-2">
                <Header text="Order Summary" />
                <div className="w-full flex justify-center items-center space-x-4">
                    <div className="w-[70%] flex flex-col justify-start items-start">
                        <span>Subtotal</span>
                        <span>Pickup fees</span>
                        <span>Taxes</span>
                        <span className="text-lg font-semibold py-2">Total</span>
                    </div>
                    <div className="w-[30%] flex flex-col justify-start items-start">
                        <span>$ {total}</span>
                        <span>$ 2.99</span>
                        <span>$ 1.99</span>
                        <span className="text-lg font-semibold py-2">$ {14.98}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}