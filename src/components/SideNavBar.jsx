import { BaseCompanyLogo } from "./base/Base";
import { CartIcon, ContactIcon, HomeIcon, OrdersIcon, ServicesIcon, SignOutIcon, closeIcon, userIcon } from "./base/BaseIcons";

const optionList = [
    {
        idx: 1,
        icon: HomeIcon,
        title: "home"
    },
    {
        idx: 2,
        icon: userIcon,
        title: "your profile"
    },
    {
        idx: 3,
        icon: CartIcon,
        title: "cart"
    },
    {
        idx: 4,
        icon: OrdersIcon,
        title: "orders"
    },
    {
        idx: 5,
        icon: ServicesIcon,
        title: "services available"
    },
    {
        idx: 6,
        icon: ContactIcon,
        title: "contact us"
    },
]

export default function SideNavBar({ sideNavActive, setSideNavActive }) {
    return (
        <div className={`${sideNavActive ? 'flex': 'hidden'} w-[80%] absolute left-0 top-0 bottom-0 h-screen shadow-3xl flex-col justify-between items-center transistion duration-300 ease-in-out bg-white z-10`}>
            <div className={`${sideNavActive ? 'block': 'hidden'} w-full h-full`}>
                <span className="w-full flex justify-between items-center pb-4 px-2 py-2 border-b border-gray-200">
                    <BaseCompanyLogo />
                    <CloseSideNav sideNavActive={sideNavActive} setSideNavActive={setSideNavActive} />
                </span>
                <div className="w-full h-full flex flex-col justify-start items-start">
                    {
                    optionList.map(item => 
                        <span key={item.idx} className="w-full text-lg px-1 py-1 flex space-x-3">
                            <span className="px-2">{item.icon}</span>
                            <span className="w-full capitalize">{item.title}</span>
                        </span>
                        )
                    }
                </div>
            </div>
            <span className="w-full border-t p-2 bg-red-800 text-white text-center text-lg">Sign out {SignOutIcon}</span>
        </div>
    )
}


const CloseSideNav = ({setSideNavActive, sideNavActive}) => {
    return sideNavActive && 
            <span 
            className="w-full text-right" 
            onClick={() => setSideNavActive(false)} >
                {closeIcon}
            </span>
}