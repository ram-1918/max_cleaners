import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProducts } from "../state/slice";
import { useState } from "react";
import { BaseButton } from "../components/base/Base";

export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const [newProduct, setNewProduct] = useState('');

    if(!products){
        return <span>Loading...</span>;
    }

    return (
        <div>
            Home
            {products.map((item, idx) => <li key={idx}>{item}</li>)}
            <input type="text" value={newProduct} onChange={e => setNewProduct(e.target.value)} />
            <BaseButton text="Add" onClick={() => {dispatch(setProducts([...products, newProduct])); setNewProduct('')}} />
        </div>
    )
}