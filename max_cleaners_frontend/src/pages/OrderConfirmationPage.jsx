import { useNavigate } from "react-router";
import { rightArrowIcon, tickIcon } from "../base/icons";
import { activeOrderSessionAtom } from "../recoil_state/atoms";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { remove_from_local, save_to_local } from "../assets/utils";
import { initial_order_session_info } from "../recoil_state/initial_data";
import BackButton from "../components/BackButton";

const delete_all_keys_from_local = () => {
  ['session', 'schedule', 'products', 'cart', 'checkout'].forEach(key => remove_from_local(key));
}

export default function OrderConfirmationPage() {
    const navigate = useNavigate();
    const [activeOrderSession, setActiveOrderSession] = useRecoilState(activeOrderSessionAtom);

    useEffect(() => {
      if(!activeOrderSession.activeSession) {
        navigate('/');
      }
      setActiveOrderSession(initial_order_session_info);
      save_to_local('session', initial_order_session_info);
      delete_all_keys_from_local();
  }, [navigate, activeOrderSession.activeSession, setActiveOrderSession]);
    return (
        <div className="h-screen flex flex-col justify-start items-center space-y-10">
            <div className="flex flex-col justify-start items-start space-y-10">
                <BackButton text="Home" path="/" />
                <span className="text-4xl font-bold">{tickIcon} Order Placed</span>
                <Link to="/home/orders" className="w-full text-center underline underline-offset-2 cursor-pointer hover:opacity-70">View all orders {rightArrowIcon}</Link>
            </div>
        </div>
    )
}