import { useState } from "react";
import ImmediatePickup from "../components/ImmediatePickup";
import LocationSpan from "../components/LocationSpan";
import Logo from "../components/Logo";
import WelcomeUsername from "../components/WelcomeUsername";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <header className="border-b py-3 px-10 flex justify-between items-center">
      {showDropdown && (
        <div
          onClick={() => setShowDropdown(false)}
          className="absolute w-full h-full top-0 left-0 z-0"
        ></div>
      )}
      <div>
        <Logo text="7.99 Cleaners" />
      </div>
      <div className="w-[45%] flex justify-between items-center space-x-10">
        <div className="space-x-7">
          <LocationSpan locationText="Edison, NJ" />
          <ImmediatePickup />
        </div>
        <WelcomeUsername
          username="Ram Chandra"
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </div>
    </header>
  );
}
