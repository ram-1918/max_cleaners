import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BaseCompanyLogo, BaseHamBurger } from "./base/Base";
import { clockIcon, userIcon } from "./base/BaseIcons";
import LocationSpan, { TopnavSec2Styles } from "./LocationSpan";
import ScheduleAPickupSpan from "./ScheduleAPickUpSpan";
import SearchBar from "./SearchBar";
import UserInfoIcon from "./UserInfoIcon";
import { faHamburger, faMultiply } from "@fortawesome/free-solid-svg-icons";

export default function Topnav({...props}) {
    return (
        <>
            <TopnavBigScreen />  
            <TopnavSmallScreen {...props} />
        </>
    );
  }

function TopnavBigScreen() {
  return (
    <header className="mobile:hidden mobile:px-1 tablet:flex-col tablet:justify-center w-full px-4 py-2 flex justify-between items-center">
        <div className="tablet:w-full tablet:text-center w-[35%]">
            <BaseCompanyLogo />
        </div>
        <OptionsDivBigScreen />
    </header>
  );
}

const OptionsDivBigScreen = () => {
  return (
    <div
      className={`
        mobile:w-full
        tablet:w-full 
        w-[65%] flex justify-end items-center space-x-5`}
    >
      <div className="w-[50%] flex justify-end items-center space-x-7">
        <LocationSpan />
        <ScheduleAPickupSpan />
      </div>
      <div className="w-[50%] flex justify-end items-center space-x-7">
        <SearchBar />
        <UserInfoIcon />
      </div>
    </div>
  );
};

function TopnavSmallScreen({...props}) {
    return (
        <header className="mobile:flex tablet:hidden laptop:hidden desktop:hidden w-full px-4 py-2 flex justify-between items-center">
            <div className="w-[10%]">
                <OptionsDivSmallScreen {...props} />
            </div>
            <div className="w-[90%] text-center">
                <BaseCompanyLogo />
            </div>
        </header>
    );
  }

const OptionsDivSmallScreen = ({sideNavActive, setSideNavActive}) => {
    const listStyle = "bg-trasparent list-none"
    return (
        <div className="w-full h-full">
            {!sideNavActive && <span onClick={() => setSideNavActive(true)}><BaseHamBurger /></span>}
        </div>
    );
}