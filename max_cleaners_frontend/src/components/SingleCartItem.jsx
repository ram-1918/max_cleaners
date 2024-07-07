import { useRecoilState, useRecoilValue } from "recoil";
import { calculate_addons, roundToTwo } from "../assets/utils";
import EditButton from "../components/EditButton";
import RemoveButton from "../components/RemoveButton";
import PriceSpan from "./PriceSpan";
import { cartAtom, productsAtom, productsBackupAtom } from "../recoil_state/atoms";
import { ProductName } from "./ProductCard";

export default function SingleCartItem({ displayLevel, ...productItem }) {
  return (
    <div className="w-full">
      <NameAndPrice {...productItem} />
      <DeleteAndEdit {...productItem} displayLevel={displayLevel} />
    </div>
  );
}

function NameAndPrice({ name, price, count }) {
  return (
    <div className="w-full flex justify-between items-center">
      <ProductName text={name} />
      <span>
        {count} x <PriceSpan amount={price} />
      </span>
      <PriceSpan amount={roundToTwo(count * price)} />
    </div>
  );
}

function DeleteAndEdit({ displayLevel, ...productItem }) {
  const [cartData, setCartData] = useRecoilState(cartAtom);
  const [, setProductsData] = useRecoilState(productsAtom);
  const productsBackup = useRecoilValue(productsBackupAtom);

  const handleRemoveItem = () => {
    const delete_item_idx = cartData.products.findIndex(item => item.id === productItem.id);
    const current_item_to_delete = cartData.products[delete_item_idx];
    const new_cart_data = cartData.products.filter(item => item.id !== productItem.id);
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
          new_data[productItem.id - 1] = productsBackup[productItem.id - 1];
          return new_data;
        }
      )
  }
  return (
    <div className="w-full flex justify-between items-center">
      <span className="text-sm font-light">Total Addons {calculate_addons(productItem)}</span>
      <div className="flex justify-center items-center space-x-4">
        {displayLevel !== 'low' && <EditButton productid={productItem.id} />}
        {displayLevel === 'high' && <RemoveButton onClick={() => handleRemoveItem()} />}
      </div>
    </div>
  );
}
