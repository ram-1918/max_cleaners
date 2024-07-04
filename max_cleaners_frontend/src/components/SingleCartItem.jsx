import { useRecoilState, useRecoilValue } from "recoil";
import { roundToTwo } from "../assets/utils";
import EditButton from "../components/EditButton";
import RemoveButton from "../components/RemoveButton";
import PriceSpan from "./PriceSpan";
import { cartAtom, productsAtom, productsBackupAtom } from "../recoil_state/atoms";

export default function SingleCartItem({ ...productItem }) {
  return (
    <div className="w-full">
      <NameAndPrice {...productItem} />
      <DeleteAndEdit {...productItem} />
    </div>
  );
}

function NameAndPrice({ name, price, count }) {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="text-xl font-medium capitalize">{name}</span>
      <span>
        {count} x <PriceSpan amount={price} />
      </span>
      <PriceSpan amount={roundToTwo(count * price)} />
    </div>
  );
}

function DeleteAndEdit({ id }) {
  const [cartData, setCartData] = useRecoilState(cartAtom);
  const [productData, setProductsData] = useRecoilState(productsAtom);
  const productsBackup = useRecoilValue(productsBackupAtom);

  const handleRemoveItem = () => {
    const delete_item_idx = cartData.products.findIndex(item => item.id === id);
    const current_item_to_delete = cartData.products[delete_item_idx];
    const new_cart_data = cartData.products.filter(item => item.id !== id);
      setCartData(
          prev => ({
            'total_price': prev.total_price - current_item_to_delete.count * current_item_to_delete.price,
            'capacity': prev.capacity - current_item_to_delete.count,
            'products': new_cart_data
          })
      );
      setProductsData(
        prev => {
          let new_data = [...prev];
          new_data[id - 1] = productsBackup[id - 1];
          return new_data;
        }
      )
  }
  return (
    <div className="w-full flex justify-end items-center">
      <div className="flex justify-center items-center space-x-4">
        <EditButton productid={id} />
        <RemoveButton onClick={() => handleRemoveItem()} />
      </div>
    </div>
  );
}
