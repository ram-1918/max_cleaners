import { rightArrowIcon, tickIcon } from "../base/icons";
import BackButton from "../components/BackButton";

export default function OrderConfirmationPage() {
    return (
        <div className="h-screen flex flex-col justify-start items-center space-y-10">
            <div className="flex flex-col justify-start items-start space-y-10">
                <BackButton text="Home" path="/" />
                <span className="text-4xl font-bold">{tickIcon} Order Placed</span>
                <span className="w-full text-center underline underline-offset-2 cursor-pointer hover:opacity-70">View all orders {rightArrowIcon}</span>
            </div>
        </div>
    )
}