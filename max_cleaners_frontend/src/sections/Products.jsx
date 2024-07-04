import { rightArrowIcon } from "../base/icons";
import { Outlet, useNavigate } from "react-router";
import { roundToTwo } from "../assets/utils";
import { useRecoilValue } from "recoil";
import { cartAtom, productsAtom } from "../recoil_state/atoms";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import PriceSpan from "../components/PriceSpan";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import SingleCartItem from "../components/SingleCartItem";

export default function Products() {
  return (
    <div className="relative w-full h-full px-10 flex justify-between items-center">
      <div className="w-full h-screen overflow-scroll flex flex-col justify-start items-start space-y-2">
        <BackButton
          text="Modify date & time"
          path="/home/neworder/pick-a-schedule"
        />
        <Header text="Select apparels for laundary" />
        <ProductsGrid />
      </div>
      <CartSummary />
      <Outlet />
    </div>
  );
}

function ProductsGrid() {
  const productsData = useRecoilValue(productsAtom);
  return (
    <div className="w-[70%] h-fit p-2 grid grid-flow-row grid-cols-5 gap-4">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function CartSummary() {
  const cartData = useRecoilValue(cartAtom);
  console.log(cartData, "cart Data");
  return (
    <div className="absolute top-0 right-10 w-[30%] h-[85%] border-l px-4 flex flex-col justify-between items-center">
      <div className="w-full h-full ">
        <Header text="Cart Summary" />
        <hr></hr>
        <div className="py-4 divide-y divide-gray-200 space-y-2">
          {cartData.products.map((item) => (
            <SingleCartItem {...item} count={item.count} />
          ))}
        </div>
      </div>
      <SummarySpan
        total_amount={roundToTwo(cartData.total_price)}
        total_count={cartData.capacity}
      />
    </div>
  );
}

function SummarySpan({ total_amount, total_count }) {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-start items-end space-y-1 border-t py-2">
      <div className="w-full flex justify-between items-center space-x-1">
        <div className="flex flex-col justify-start items-start">
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
      <Button
        onClick={() => {
          navigate("/home/neworder/overview");
        }}
        text="Checkout"
        icon={rightArrowIcon}
      />
    </div>
  );
}
