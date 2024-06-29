import { useSelector } from 'react-redux';
import { getCurrentActiveDate } from "../../state/slice";
import { month_mapper } from './NewOrder';
import ProductCard1 from './ProductCard1';
import OrderSummaryDisplay from './OrderSummaryDisplay';
import { useState } from 'react';

const product_data = [
    {
        id: 1,
        name: 'shirt',
        price: 3.56,
        thumbnail: '',
    },
    {
        id: 2,
        name: 'pants',
        price: 4.12,
        thumbnail: '',
    },
    {
        id: 3,
        name: 'jacket',
        price: 5.02,
        thumbnail: '',
    },
    {
        id: 4,
        name: 'coat',
        price: 7.99,
        thumbnail: '',
    },
];

const cloth_types = [
    {
        id: 1,
        name: 'wool',
    },
    {
        id: 2,
        name: 'cotton'
    },
    {
        id: 3,
        name: 'silk'
    }
]

const readable_formatted_date = (m,d,y) => {
    return `${month_mapper[m]} ${d}, ${y}`;
  }

  const initial_order_detail = {
    product: '',
    count: 0,
    price: 0,
    clothtype: [],
    washtypes: []
  }

export default function Products() {
    const currentActiveDate = useSelector(getCurrentActiveDate);
    const [orderData, setOrderData] = useState([]);
    const [singleOrder, setSingleOrder] = useState(initial_order_detail);

    const props = {
        orderData: orderData,
        setOrderData: setOrderData,
        singleOrder: singleOrder,
        setSingleOrder: setSingleOrder
    };

    return (
        <div className="w-full h-full flex flex-row justify-start items-center">
            <div className='w-[75%] h-full flex flex-col justify-start items-start border-r'>
                <span className='px-2 text-xl font-light'>Select clothes and washing type as you would like</span>
                <div className='w-full h-[25%] flex flex-row justify-start items-center space-x-3 bg-green-200 p-4'>
                    <div className='bg-red-200 w-[33%] h-full'>
                        <DisplayTags title="Cloth type" data={cloth_types} {...props} />
                    </div>
                    <div className='bg-red-200 w-[33%] h-full'></div>
                    <div className='bg-red-200 w-[33%] h-full'></div>
                </div>
                <div className="h-fit w-full grid grid-flow-row grid-cols-4 gap-4 p-4">
                    {singleOrder.product}
                    {product_data.map(
                        item => 
                        <ProductCard1 
                            key={item.id} 
                            {...props} 
                            name={item.name} 
                            price={item.price} 
                        />)}
                </div>
            </div>
            <div className="w-[25%] h-full">
                <span className='capitalize p-2 text-2xl font-light'>order summary</span>
                <OrderSummaryDisplay data={orderData} />
            </div>
        </div>
    )
}

const DisplayTags = ({title, data, setOrderData}) => {
    const item_style = 'p-1 px-2 m-1 text-md font-medium bg-blue-100 rounded';
    return (
        <div className='w-full flex flex-col justify-start items-start space-y-1'>
            <span className='text-lg font-light'>{title}</span>
            <div className='w-full h-fit flex flex-wrap justify-start items-start'>
                {data.map(
                    item => 
                    <span  className={item_style} key={item.id}>
                        {item.name}
                    </span>
                )}
            </div>
        </div>
    )
}

