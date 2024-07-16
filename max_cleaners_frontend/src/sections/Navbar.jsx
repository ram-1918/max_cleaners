import { useState } from "react";
import ImmediatePickup from "../components/ImmediatePickup";
import LocationSpan from "../components/LocationSpan";
import Logo from "../components/Logo";
import WelcomeUsername from "../components/WelcomeUsername";
import { useNavigate } from "react-router";
import { notificationIcon } from "../base/icons";
import { useRecoilValue } from "recoil";
import { currentUserAtom } from "../recoil_state/atoms";

export default function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const currentUser = useRecoilValue(currentUserAtom);
  return (
    <header className="border-b py-2 px-10 flex justify-between items-center text-md font-medium text-gray-500">
      {showDropdown && (
        <div
          onClick={() => setShowDropdown(false)}
          className="absolute w-full h-full top-0 left-0 z-10"
        ></div>
      )}
      <div>
        <Logo onClick={() => {navigate('/')}} text="7.99 Cleaners" />
      </div>
      <div className="w-[50%] flex justify-end items-center space-x-10">
        <div className="space-x-5">
          <LocationSpan locationText={'currentUser.location'} />
          <ImmediatePickup />
        </div>
        {notificationIcon}
        <WelcomeUsername
          username={'currentUser.fullname'}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </div>
    </header>
  );
}
