import { useNavigate } from "react-router"
import Header from "../components/Header";
import PriceSpan from "../components/PriceSpan";
import { closeIcon, minusIcon, plusIcon } from "../base/icons";
import { useState } from "react";
import { roundToTwo } from "../assets/utils";
import Button from "../components/Button";

export const option_style = 'w-32 text-center px-2 py-1 text-sm font-medium rounded-full border cursor-pointer hover:bg-gray-100 uppercase';
export const OptionsSpan = ({options}) => {
    return (
        options.map((option, idx) => <span className={option_style} key={idx}>{option}</span>)
    )
}

const styled_hr_line = (
    <div className="w-full flex justify-between items-center space-x-2">
        <div className="w-[45%] h-0 border border-sky-100"></div>
        <div className="w-2 h-2 rounded-full border bg-sky-200"></div>
        <div className="w-[45%] h-0 border border-sky-100"></div>
    </div>
);

export default function AddonsPage({ name="Shirt", cost=3.65 }) {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full fixed -top-2 left-0 right-0 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.3)]">
            <div onClick={() => {navigate('/home/neworder/select-items/')}} className="w-full h-full absolute"></div>
            <div className="z-10 w-[45%] rounded-xl border-2 bg-white overflow-auto overscroll-contain px-10 py-5 space-y-4">
                <div className="flex justify-between items-center">
                    <Header text="Select the addons needed" />
                    <span onClick={() => {navigate('/home/neworder/select-items/')}} className="text-2xl cursor-pointer">{closeIcon}</span>
                </div>
                <ProductDetails name={name} cost={cost} />
                {styled_hr_line}
                <AddonsDetails />
                <InstructionSpan />
                <div className="w-full flex justify-end items-center space-x-2">
                    <Button onClick={() => {navigate('/home/neworder/select-items/')}} text="Cancel" />
                    <Button text="Add to Cart" />
                </div>
            </div>
        </div>
    )
}

function ProductDetails({ name, cost }) {
    const [count, setCount] = useState(1);
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col items-start justify-center">
                <span className="text-xl font-medium">{name}</span>
                <PriceSpan amount={cost} />
            </div>
            <div className="flex justify-between items-center space-x-5">
                <Counter setCount={setCount} count={count} />
                <div className="w-24 text-right text-xl font-semibold select-none">
                    <PriceSpan amount={roundToTwo(count * cost)} />
                </div>
            </div>
        </div>
    )
}

function Counter({setCount, count}) {
    return (
        <div className="space-x-2">
            <span className="cursor-pointer" onClick={() => setCount(count + 1)}>{plusIcon}</span>
            <span className="select-none w-6 h-6 px-2 py-1 text-lg">{count}</span>
            <span className={`${count <= 0 && 'pointer-events-none rounded-full p-1 bg-gray-100 cursor-pointer'}`} onClick={() => setCount(count - 1)}>{minusIcon}</span>
        </div>
    )
}

const addons = [
    {
        id: 1,
        type: 'cloth type',
        options: ['wool', 'silk', 'cotton', 'lenin', 'knit', 'other']
    },
    {
        id: 2,
        type:'alterations',
        options: ['hem', 'cuff', 'shrtn', 'sleeve', 'lenghten', 'other']
    },
    {
        id: 3,
        type: 'Wash Type',
        options: ['Regualar', 'Dry Cleaning']
    }
]

function AddonsDetails() {
    return (
        <div className="flex flex-col justify-start items-start space-y-4">
            {
                addons.map(
                    item => (
                        <div className="flex flex-col justify-start items-start space-y-2" key={item.id}>
                            <span className="text-md font-semibold after:content-['?'] capitalize">{item.type}</span>
                            <div className="grid grid-flow-row grid-cols-4 gap-4">
                                <OptionsSpan options={item.options} />
                            </div>
                        </div>
                    ))
            }
            {"dry cleaning" === "dry cleaning" &&
                (
                    <div className="space-x-2">
                        <span className="text-md font-semibold after:content-['?'] capitalize">Stains</span>
                        <span className={option_style}>Yes</span>
                        <span className={option_style}>No</span>
                    </div>
                )
            }
        </div>
    )
}

function InstructionSpan() {
    return (
        <div className="w-full flex flex-col justify-start items-start space-y-2">
            <span className="text-md font-semibold after:content-['?'] capitalize">any instructions</span>
            <textarea className="w-full border p-1 text-md font-light outline-none" rows='3' placeholder="Please enter all the instructions for this item..."></textarea>
        </div>
    )
}