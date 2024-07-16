import { rightArrowIcon } from "../base/icons";
import { Outlet, useNavigate } from "react-router";
import { roundToTwo, save_to_local } from "../assets/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartAtom,
  errorAtom,
  orderItemAtom,
  productsAtom,
} from "../recoil_state/atoms";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import PriceSpan from "../components/PriceSpan";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import SingleCartItem from "../components/SingleCartItem";
import useHandleSession from "../hooks/useHandleSession";
import { useEffect } from "react";

export default function Products() {
  const error = useRecoilValue(errorAtom);
  useHandleSession('productsPage', 'products');
  return (
    <div className="relative w-full h-full px-10 flex justify-between items-center space-x-2">
      <div className="w-full h-screen overflow-scroll flex flex-col justify-start items-start space-y-2">
        <BackButton
          text="Modify date & time"
          path="/home/neworder/pick-a-schedule"
        />
        {error && error}
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
    <div className="w-[74%] h-fit py-2 grid grid-flow-row grid-cols-5 gap-3">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function CartSummary() {
  const cartData = useRecoilValue(cartAtom);
  return (
    <div className="absolute top-0 right-10 w-[25%] h-[85%] border-l px-4 flex flex-col justify-between items-center">
      <div className="w-full h-full ">
        <Header text="Cart Summary" />
        <hr></hr>
        <CartItems cart={cartData} />
      </div>
      <SummarySpan
        total_amount={roundToTwo(cartData.total_price)}
        total_count={cartData.capacity}
      />
    </div>
  );
}

const handle_click = (cartData, setOrderItem, navigate, setError) => {
  setOrderItem((prev) => ({
    ...prev,
    cart: cartData,
  }));
  if (cartData.products.length !== 0) {
    navigate("/home/neworder/overview");
    setError("");
  } else {
    setError("Please add items to cart");
  }
};

function SummarySpan({ total_amount, total_count }) {
  const navigate = useNavigate();
  const cartData = useRecoilValue(cartAtom);
  const [, setOrderItem] = useRecoilState(orderItemAtom);
  const [, setError] = useRecoilState(errorAtom);

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
        onClick={() => handle_click(cartData, setOrderItem, navigate, setError)}
        text="Checkout"
        icon={rightArrowIcon}
      />
    </div>
  );
}

export function CartItems({ textSize = "text-md", cart, save=true, displayLevel="high" }) {
  // const cartData = useRecoilValue(cartAtom);
  useEffect(() => {
    save && save_to_local('cart', cart);
  }, [cart, save]);

  return (
    <div
      className={`w-full py-0 divide-y divide-gray-200 space-y-2 ${textSize}`}
    >
      {cart.products.map((item) => (
        <SingleCartItem key={item.id} {...item} count={item.count} displayLevel={displayLevel} />
      ))}
    </div>
  );
}
