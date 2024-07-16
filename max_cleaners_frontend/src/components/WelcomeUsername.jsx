import { useNavigate } from "react-router";
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
import { API_URL, axiosInstance } from "../assets/utils";
import { useRecoilState } from "recoil";
import { isLoggedInAtom } from "../recoil_state/atoms";

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
      className={`w-56 flex justify-between items-center px-2 py-2 bg-gray-100 border cursor-pointer ${
        showDropdown ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"
      }`}
    >
      Welcome, {" "}
      <p style={{ color: textcolor_1, fontWeight: "bold" }} className="px-1 w-44 overflow-hidden text-ellipsis whitespace-nowrap">{username}</p>
      {" "} {showDropdown ? caretupIcon: caretDownIcon}
    </span>
  );
}

const url = `${API_URL}/user/logout`;
const list_style = "text-md px-2 py-2 cursor-pointer hover:bg-gray-200";

function DropdownOptions() {
  const navigate = useNavigate();
  const [, setIsLoggedIn] = useRecoilState(isLoggedInAtom);

  const handle_logout = () => {
    // API CALL
    axiosInstance.get(url)
    .then(() => console.log('Logged out'))
    .catch(err => console.log("Logout error: ", err))
    setIsLoggedIn(false);
    localStorage.removeItem('lg');
    localStorage.removeItem('userid');
  };

  return (
    <ul className="z-10 w-full absolute top-1 left-0 bg-white shadow-lg rounded-bl-lg rounded-br-lg overflow-hidden">
      {options.map((item) => (
        <li onClick={() => {navigate(item.path)}} key={item.id} className={list_style}>
          <span className="pr-2">{item.icon}</span> {item.text}
        </li>
      ))}
      <li onClick={() => handle_logout()} className={`${list_style} border-t text-red-600`}>
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
    path: "/profile",
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
