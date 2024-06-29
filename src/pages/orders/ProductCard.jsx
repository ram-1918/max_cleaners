import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shirt from '../../images/prod_shirt.png';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ProductCard() {
    return (
        <div className="w-72 border rounded-bl-3xl rounded-br-3xl shadow">
            <div className='w-full h-56'>
                <img src={shirt} alt="shirt" className='w-full h-full bg-cover bg-center bg-no-repeat rounded-t-r-xl rounded-t-l-xl' />
            </div>
            <Details />
        </div>
    )
}

const Details = () => {
    const [showAddOns, setShowAddOns] = useState(false);
    const list_style = 'text-sm';
    return (
        <div className='w-full h-full flex flex-col justify-center items-start space-y-1 px-2 pb-4 rounded-bl-3xl rounded-br-3xl'>
            <div onClick={() => setShowAddOns(false)} className={`${showAddOns ? 'block': 'hidden'} absolute w-full h-full z-0`}></div>
            <div className='w-full flex justify-between items-center'>
                <span className='text-lg'>Shirt</span>
                <div className='space-x-2'>
                    <span className='text-md'>- 3 +</span>
                    <span className='text-lg font-medium'>$ 3.29</span>
                </div>
            </div>
            <div className='w-full flex justify-start items-center space-x-2'>
                <span className='text-md underline underline-offset-2 font-light'>Add-ons</span>
                <span onClick={() => setShowAddOns(!showAddOns)}><FontAwesomeIcon icon={faCaretDown} /></span>
            </div>
            <div className={`relative  w-full h-full bg-red-400`}>
                <div className={`${showAddOns ? 'visible': 'hidden'} w-full h-fit absolute top-0 left-0 bg-white p-2 z-30`}>
                    <ul className='grid gap-2 grid-flow-row grid-cols-2'>
                        <li className={list_style}>Regular Wash + </li>
                        <li className={list_style}>Dry Cleaning + </li>
                        <li className={list_style}>Leather + </li>
                        <li className={list_style}>Household + </li>
                        <li className={list_style}>Alterations + </li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex justify-between items-center'>
                <span className='text-sm text-green-800'>3 Add-ons selected</span>
                <span className='p-2 rounded-lg bg-slate-700 text-white'>Add to cart</span>
            </div>
        </div>
    )
}