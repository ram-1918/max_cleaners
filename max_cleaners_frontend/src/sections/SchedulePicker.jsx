import CalendarDiv from "./CalendarDiv";
import BaseCard from "../components/BaseCard";
import { AddressDiv, LocalHeader } from "../pages/OrderOverviewPage";
import NoContentDiv from "../components/NoContentDiv";
import {
  currentUserAtom,
  orderItemAtom,
  selectedScheduleAtom,
} from "../recoil_state/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { readableFormattedDate, save_to_local } from "../assets/utils";
import { useNavigate } from "react-router";
import { useState } from "react";
import useHandleSession from "../hooks/useHandleSession";

const handle_click = (
  scheduleItem,
  userData,
  setOrderItem,
  navigate,
  setError
) => {
  const primary_address = userData.addresses.filter(
    (item) => item.primary === true
  )?.[0];
  setOrderItem((prev) => ({
    ...prev,
    address: primary_address.address,
    schedule: scheduleItem,
  }));
  if (primary_address && scheduleItem.date && scheduleItem.time_slot) {
    navigate("/home/neworder/select-items/");
    setError("");
  } else {
    setError("Please select date and time");
  }
};

export default function SchedulePicker() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [, setOrderItem] = useRecoilState(orderItemAtom);
  const scheduleItem = useRecoilValue(selectedScheduleAtom);
  const userData = useRecoilValue(currentUserAtom);
  useHandleSession('schedulePage', 'schedulePage');

  return (
    <BaseCard
      title="Schedule a Pick up for Laundary"
      component1={<LeftComponent />}
      component2={<RightComponent />}
      error={error}
      nextPageText="Continue"
      prevPagePath="/home/"
      prevPageText="Home"
      onClick={() =>
        handle_click(scheduleItem, userData, setOrderItem, navigate, setError)
      }
    />
  );
}

function LeftComponent() {
  return (
    <div className="w-[60%] flex flex-col justify-center items-center">
      <CalendarDiv />
    </div>
  );
}

function RightComponent() {
  return (
    <div className="w-[40%] flex flex-col justify-between items-start gap-7 p-2 text-sm overflow-y-scroll">
      <AddressDiv />
      <SlotComponent />
      <ConfirmSchedule />
    </div>
  );
}

function SlotComponent() {
  const available_slots = ["10pm-2pm", "3pm-5pm"];
  return (
    <div className="flex flex-col justify-center items-start space-y-1">
      <span className="font-light">
        Available Slots for <ReadableDate />
      </span>
      {available_slots.length !== 0 ? (
        <SlotsGrid available_slots={available_slots} />
      ) : (
        <NoContentDiv text="No available time slots on this day" />
      )}
    </div>
  );
}

function SlotsGrid({ available_slots }) {
  const [selectedSchedule, setSelectedSchedule] =
    useRecoilState(selectedScheduleAtom);

  const handle_selected_slot = (slot) => {
    setSelectedSchedule((prev) => ({ ...prev, time_slot: slot }));
    save_to_local('schedule', {...selectedSchedule, 'time_slot': slot});
  };

  return (
    <div className="w-full h-fit flex flex-wrap justify-start items-start gap-2 overflow-y-scroll">
      {available_slots.map((slot, idx) => (
        <SlotCard
          key={idx}
          onClick={() => handle_selected_slot(slot)}
          isActive={selectedSchedule.time_slot === slot}
          slot={slot}
        />
      ))}
    </div>
  );
}

export function SlotCard({ slot, hoveroff = false, isActive, ...props }) {
  return (
    <span
      {...props}
      className={`bg-sky-100 p-1 text-sm rounded uppercase cursor-pointer ${
        !hoveroff && "hover:bg-sky-200"
      } ${isActive && "bg-green-200"} `}
    >
      {slot}
    </span>
  );
}

const ReadableDate = () => {
  const selectedSchedule = useRecoilValue(selectedScheduleAtom);
  return (
    <span className="font-medium capitalize">
      {readableFormattedDate(new Date(selectedSchedule.date))}
    </span>
  );
};

function ConfirmSchedule() {
  const selectedSchedule = useRecoilValue(selectedScheduleAtom);
  return (
    <div className="flex flex-col justify-start items-start space-y-1">
      <LocalHeader text="date & time details:" />
      <span>
        Date: <ReadableDate />
      </span>
      <span>
        Time Slot:{" "}
        {selectedSchedule.time_slot ? (
          <SlotCard slot={selectedSchedule.time_slot} hoveroff={true} />
        ) : (
          "--:--"
        )}
      </span>
    </div>
  );
}