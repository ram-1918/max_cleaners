import { useRecoilSnapshot, useRecoilState, useRecoilValue } from "recoil";
import { locationIcon } from "../base/icons";
import BaseCard from "../components/BaseCard";
import { activeOrderSessionAtom, cartAtom, currentUserAtom, errorAtom, orderItemAtom, ordersListAtom, selectedScheduleAtom } from "../recoil_state/atoms";
import { CartItems } from "../sections/Products";
import { SlotCard } from "../sections/SchedulePicker";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { readableFormattedDate, roundoff, save_to_local } from "../assets/utils";

const handle_click = (navigate, setOrderItem, ordersList, orderItem, setOrdersList) => {
  const cart_value = orderItem.cart.total_price;
  const pick_up_fees = roundoff((cart_value * 2) / 100);
  const taxes = roundoff((cart_value * 10) / 100);
  const grand_total = roundoff(cart_value + pick_up_fees + taxes);
  setOrderItem(
    prev => ({
      ...prev,
      status: 'placed'
    })
  )
  setOrdersList(prev => [...prev, ({...orderItem, status: 'placed', total_order_value: grand_total})]);
  save_to_local('orders', [...ordersList, ({...orderItem, status: 'placed', total_order_value: grand_total})]);
  navigate('/home/neworder/order-confirmation')
}

export default function OrderOverviewPage() {
  const navigate = useNavigate();
  const error = useRecoilValue(errorAtom);
  const [orderItem, setOrderItem] = useRecoilState(orderItemAtom);
  const userData = useRecoilValue(currentUserAtom);
  const scheduleItem = useRecoilValue(selectedScheduleAtom);
  const cartItem = useRecoilValue(cartAtom);
  const [ordersList, setOrdersList] = useRecoilState(ordersListAtom);
  const [activeOrderSession, setActiveOrderSession] = useRecoilState(activeOrderSessionAtom);
  const primary_address = userData.addresses.filter(
    (item) => item.primary === true
  )?.[0];

  useEffect(() => {
    console.log('products', activeOrderSession);
    if(!activeOrderSession.activeSession) {
      navigate('/');
    }
    setActiveOrderSession(prev => ({...prev, orderSummaryPage: true}))
    save_to_local('session', {...activeOrderSession, 'orderSummaryPage': true});
  }, []);


  useEffect(() => {
    const final_order_details = {
      ...orderItem,
      id: 1426,
      user: 1,
      created_at: readableFormattedDate(new Date()),
      status: 'pending',
      address: primary_address.address,
      schedule: scheduleItem,
      cart: cartItem
    }
    setOrderItem(final_order_details);
    save_to_local('checkout', final_order_details);
  }, []);

  return (
    <BaseCard
      title="Order Overview"
      component1={<LeftComponent orderItem={orderItem} displayLevel="medium" />}
      component2={<RightComponent orderItem={orderItem} />}
      error={error}
      nextPageText="Place Order"
      prevPagePath="/home/neworder/select-items/"
      prevPageText="Modify items"
      onClick={() => handle_click(navigate, setOrderItem, ordersList, orderItem, setOrdersList)}
    />
  );
}

export function LeftComponent({orderItem, save=true, displayLevel={displayLevel}}) {
  return (
    <div className="w-[55%] h-80 py-1 px-4 flex flex-col justify-start items-start shadow overflow-y-scroll">
      <span className="py-2 text-lg font-medium text-sky-500">
        Item Count: {orderItem.cart.capacity}
      </span>
      <CartItems textSize="text-sm" cart={orderItem.cart} save={save}  displayLevel={displayLevel} />
    </div>
  );
}

export function RightComponent({ orderItem }) {
  return (
    <div className="w-[45%] h-80 flex flex-col items-start justify-start space-y-5 text-sm overflow-y-scroll">
      {orderItem && <AddressDiv displayAddress={orderItem.address} />}
      {orderItem && <DateTimeDiv date={orderItem.schedule.date} timeSlot={orderItem.schedule.time_slot} />}
      <div className="w-full space-y-2">
        <LocalHeader text="Order Summary" />
        {orderItem && <OrderSummaryDiv cartValue={orderItem.cart.total_price} />}
      </div>
    </div>
  );
}

export function DateTimeDiv({date, timeSlot}) {
  return (
    <div className="flex flex-col justify-start items-start space-y-1">
      <LocalHeader text="Date & Time" />
      <span>
        Scheduled on <span className="font-semibold capitalize">{readableFormattedDate(new Date(date))}</span>
      </span>
      <SlotCard slot={timeSlot} />
    </div>
  );
}

export function AddressDiv({displayAddress=""}) {
  const user_data = useRecoilValue(currentUserAtom);
  const [scheduleData, setScheduleData] = useRecoilState(selectedScheduleAtom);
  const primary_address = user_data.addresses.filter(
    (item) => item.primary === true
  )?.[0];

  useEffect(() => {
    setScheduleData({...scheduleData, 'address': (primary_address && primary_address.address) || ""});
  }, [primary_address, setScheduleData]);


  
  return (
    <div className="flex flex-col justify-start items-start space-y-1">
      <LocalHeader text="Pick up at: " />
      <span>
        {locationIcon} {displayAddress ? displayAddress : (primary_address && primary_address.address)}{" "}
        <span className="text-sm text-blue-500 underline underline-offset-2">
          Change
        </span>{" "}
      </span>
    </div>
  );
}

function OrderSummaryDiv({ cartValue }) {
  const pick_up_fees = roundoff((cartValue * 2) / 100);
  const taxes = roundoff((cartValue * 10) / 100);
  const grand_total = roundoff(cartValue + pick_up_fees + taxes);
  return (
    <div className="w-full flex justify-center items-center space-x-4">
      <div className="w-[70%] flex flex-col justify-start items-start">
        <span>Subtotal</span>
        <span>Pickup fees</span>
        <span>Taxes</span>
        <span className="text-lg font-semibold py-2">Total</span>
      </div>
      <div className="w-[30%] flex flex-col justify-start items-start">
        <span>$ {cartValue}</span>
        <span>$ {pick_up_fees}</span>
        <span>$ {taxes}</span>
        <span className="text-lg font-semibold py-2">$ {grand_total}</span>
      </div>
    </div>
  );
}

export const LocalHeader = ({ text }) => (
  <span className="text-lg font-semibold capitalize">{text}</span>
);
