import { faArrowLeft, faArrowRight, faBox, faBoxes, faBoxesAlt, faCaretDown, faCaretUp, faCheck, faCheckCircle, faCogs, faCopyright, faEdit, faLocationDot, faMinus, faMultiply, faPhone, faPlus, faShieldAlt, faShirt, faSignOut, faTShirt, faTrash, faUser, faUserClock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const baseStyle = 'text-md text-slate-600'

export const locationIcon = <FontAwesomeIcon className={`${baseStyle} text-red-500`} icon={faLocationDot} />;
export const userIcon = <FontAwesomeIcon className={baseStyle} icon={faUser} />;
export const newUserIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faUserPlus} />;
export const servicesIcon = <FontAwesomeIcon className={baseStyle} icon={faCogs} />;
export const contactusIcon = <FontAwesomeIcon className={baseStyle} icon={faPhone} />;
export const privacyIcon = <FontAwesomeIcon className={baseStyle} icon={faShieldAlt} />;
export const signoutIcon = <FontAwesomeIcon className={`text-md text-red-600`} icon={faSignOut} />;
export const caretDownIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faCaretDown} />;
export const caretupIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faCaretUp} />;
export const pickupIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faUserClock} />;
export const newOrderIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faBox} />;
export const allOrdersIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faBoxes} />;
export const leftArrowIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faArrowLeft} />;
export const rightArrowIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faArrowRight} />;
export const copyrights = <FontAwesomeIcon className={`${baseStyle} text-white`} icon={faCopyright} />;
export const plusIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faPlus} />;
export const minusIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faMinus} />;
export const closeIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faMultiply} />;
export const editIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faEdit} />;
export const trashIcon = <FontAwesomeIcon className={`${baseStyle} text-red-700 text-sm`} icon={faTrash} />;
export const hangerIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faShirt} />;
export const tickIcon = <FontAwesomeIcon className={`${baseStyle} text-green-600`} icon={faCheckCircle} />;