import { textcolor_1, textcolor_2 } from "../assets/data";
import {
  caretDownIcon,
  caretupIcon,
  contactusIcon,
  privacyIcon,
  servicesIcon,
  signoutIcon,
  userIcon,
} from "../base/icons";

export default function WelcomeUsername({
  username,
  showDropdown,
  setShowDropdown,
}) {
  return (
    <div onClick={() => setShowDropdown(!showDropdown)} className="block">
      <Username username={username} showDropdown={showDropdown} />
      {showDropdown && (
        <div className="relative">
          <DropdownOptions />
        </div>
      )}
    </div>
  );
}

function Username({ username, showDropdown }) {
  return (
    <span
      style={{ color: textcolor_2 }}
      className={`px-2 py-2 bg-gray-100 border cursor-pointer ${
        showDropdown ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"
      }`}
    >
      Welcome,{" "}
      <span style={{ color: textcolor_1, fontWeight: "bold" }}>{username}</span>
      {" "} {showDropdown ? caretupIcon: caretDownIcon}
    </span>
  );
}

function DropdownOptions() {
  const list_style = "text-md px-2 py-2 cursor-pointer hover:bg-gray-200";
  return (
    <ul className=" w-full absolute top-1 left-0 bg-white shadow rounded-bl-lg rounded-br-lg overflow-hidden">
      {options.map((item) => (
        <li key={item.id} className={list_style}>
          <span className="pr-2">{item.icon}</span> {item.text}
        </li>
      ))}
      <li className={`${list_style} border-t text-red-600`}>
        <span className="pr-2">{signoutIcon}</span> Sign Out
      </li>
    </ul>
  );
}

// Related Data

const options = [
  {
    id: 1,
    text: "Profile",
    path: "/",
    icon: userIcon,
  },
  {
    id: 2,
    text: "Services Available",
    path: "/",
    icon: servicesIcon,
  },
  {
    id: 3,
    text: "Contact us",
    path: "/",
    icon: contactusIcon,
  },
  {
    id: 4,
    text: "Private Policy",
    path: "/",
    icon: privacyIcon,
  },
];
