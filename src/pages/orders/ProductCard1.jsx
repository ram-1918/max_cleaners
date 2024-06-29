import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import shirt from '../../images/prod_shirt.png';
import { faCaretDown, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ProductCard1({...props}) {
    return (
        <div className="w-full h-full flex justify-start items-center space-x-2 border border-gray-300 rounded-lg shadow py-1 px-2">
            <div className='w-16 h-16'>
                <img src={shirt} alt="shirt" className='w-full h-full bg-cover bg-center bg-no-repeat' />
            </div>
            <Details {...props} />
        </div>
    )
}

const Details = ({name, price, ...rest}) => {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col items-center justify-start'>
                <span className='text-xl font-light'>{name}</span>
                <span className='text-sm font-light'>$ {price}</span>
            </div>
            {/* <WashingOptions /> */}
            <AddButton {...rest} />
        </div>
    )
}

const AddButton = ({...props}) => {
    return <button onClick={() => props.setSingleOrder(p => ({...p, 'product': 'product item'}))} className='w-[10%]'><FontAwesomeIcon icon={faPlus} /></button>
}

const WashingOptions = () => {
    const list_style = 'text-sm font-medium leading-6 tracking-wide px-2 m-1 rounded bg-blue-50 cursor-pointer'
    return (
        <ul className='w-[75%] flex flex-wrap justify-start items-center'>
            <li className={`${list_style}`}>Regular Wash</li>
            <li className={`${list_style}`}>Laundary</li>
            <li className={`${list_style}`}>Alterations</li>
            <li className={`${list_style}`}>Dry Cleaning</li>
            <li className={`${list_style}`}>Leather</li>
            <li className={`${list_style}`}>Household</li>
        </ul>
    )
}