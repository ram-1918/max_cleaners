import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCaretRight, faCartFlatbed, faCartShopping, faClockFour, faCogs, faEdit, faHomeAlt, faListAlt, faLocationDot, faMultiply, faPhone, faPhoneAlt, faSearch, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

export const iconStyles = {className: 'text-gray-700 text-sm'};
export const clockIcon = <FontAwesomeIcon {...iconStyles} icon={faClockFour} />;
export const searchIcon = <FontAwesomeIcon {...iconStyles} icon={faSearch} />;
export const userIcon = <FontAwesomeIcon {...iconStyles} icon={faUser} />;
export const locationIcon = <FontAwesomeIcon {...iconStyles} icon={faLocationDot} />;
export const closeIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1.2rem'}} icon={faMultiply} />;
export const HomeIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faHomeAlt} />;
export const SignOutIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem', color: 'white'}} icon={faSignOut} />;
export const CartIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faCartShopping} />;
export const OrdersIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faListAlt} />;
export const ContactIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faPhone} />;
export const ServicesIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faCogs} />;
export const editIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faEdit} />;
export const rightCaretIcon = <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem'}} icon={faCaretRight} />;
export const rightArrowIcon = (color) => <FontAwesomeIcon {...iconStyles} style={{fontSize: '1rem', color:color}} icon={faArrowRightLong} />;