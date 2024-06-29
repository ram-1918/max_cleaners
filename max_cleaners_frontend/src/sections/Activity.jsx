import { textcolor_2 } from "../assets/data";
import { allOrdersIcon, newOrderIcon, newUserIcon, userIcon } from "../base/icons";
import ActivityCard from "../components/ActivityCard";
import Header from "../components/Header";

export default function Activity() {
  return (
    <div className="px-10 space-y-2">
      <Header text="Your Activity" />
      <div className="flex justify-start items-center space-x-4">
        <ActivityCard
          icon={newOrderIcon}
          bgcolor="#FFE3E3"
          heading="Create a new order"
          details="You can pick a date and time, add cloth types and customize your wash appropriately"
          anchor="Start here"
          path="/home/neworder/pick-a-schedule"
        />
        <ActivityCard
          icon={allOrdersIcon}
          bgcolor="#E4D8DC"
          count="12"
          details="You can view your Order history here"
          text="Total Orders Placed"
          anchor="View all"
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
