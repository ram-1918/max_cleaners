import { useRecoilState } from "recoil";
import { textcolor_2 } from "../assets/data";
import { allOrdersIcon, newOrderIcon, newUserIcon, userIcon } from "../base/icons";
import ActivityCard from "../components/ActivityCard";
import Header from "../components/Header";
import { activeOrderSessionAtom } from "../recoil_state/atoms";
import { useNavigate } from "react-router";
import { save_to_local } from "../assets/utils";

const handle_start_order_click = (setActiveOrderSession, activeOrderSession, navigate) => {
  console.log('stated order');
  setActiveOrderSession(prev => ({
    ...prev,
    activeSession: true
  }))
  navigate('/home/neworder/pick-a-schedule')
  save_to_local('session', {...activeOrderSession, 'activeSession': true});
}

export default function Activity() {
  const navigate = useNavigate();
  const [activeOrderSession, setActiveOrderSession] = useRecoilState(activeOrderSessionAtom);
  return (
    <div className="px-10 space-y-2">
      <Header text="Your Activity" />
      <div className="flex justify-start items-center space-x-4">
        <ActivityCard
          icon={newOrderIcon}
          bgcolor="#FFE3E3"
          heading="Create a new order"
          details="You can pick a date and time, add cloth types and customize your wash appropriately"
          anchor={activeOrderSession.activeSession ? "Continue": "Start here"}
          onClick={() => handle_start_order_click(setActiveOrderSession, activeOrderSession, navigate)}
        />
        <ActivityCard
          icon={allOrdersIcon}
          bgcolor="#E4D8DC"
          count="12"
          details="You can view your Order history here"
          text="Total Orders Placed"
          anchor="View all"
          onClick={() => navigate('/home/orders')}
        />
        <ActivityCard
          icon={newOrderIcon}
          bgcolor="#FFF8EA"
          heading="Place a quick order"
          details="You can select a predefined templates at lower pricing, includes Ironing."
          anchor="Go"
          path="/home/neworder/pick-a-schedule"
        />
        <ActivityCard
          icon={newUserIcon}
          bgcolor="#CCF2F4"
          heading="Refer your friend"
          details="Help your friends to wash your clothes by sharing our application with your friends"
          anchor="Refer here"
          path="/home/neworder/pick-a-schedule"
        />
      </div>
    </div>
  );
}
