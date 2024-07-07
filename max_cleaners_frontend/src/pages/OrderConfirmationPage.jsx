import { useNavigate } from "react-router";
import { rightArrowIcon, tickIcon } from "../base/icons";
import { activeOrderSessionAtom } from "../recoil_state/atoms";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { remove_from_local, save_to_local } from "../assets/utils";
import BackButton from "../components/BackButton";

export default function OrderConfirmationPage() {
    const navigate = useNavigate();
    const [activeOrderSession, setActiveOrderSession] = useRecoilState(activeOrderSessionAtom);

    useEffect(() => {
      console.log('confirmation', activeOrderSession);
      if(!activeOrderSession.activeSession) {
        navigate('/');
      }
      setActiveOrderSession(prev => ({...prev, OrderConfirmationPage: true, activeSession: false}));
      save_to_local('session', {...activeOrderSession, 'activeSession': false});
      ['session', 'schedule', 'products', 'cart', 'checkout'].forEach(key => remove_from_local(key));
    }, []);
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