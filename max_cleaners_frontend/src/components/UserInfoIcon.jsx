import { userIcon } from "./base/BaseIcons";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../state/slice';

export default function UserInfoIcon() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <span className="cursor-pointer">
            {userIcon} {!isLoggedIn && "Sign in"}
        </span>
    )
}