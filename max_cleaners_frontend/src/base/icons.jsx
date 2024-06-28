import { faCaretDown, faCaretUp, faCogs, faListCheck, faLocationDot, faPhone, faShield, faShieldAlt, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const baseStyle = 'text-md text-slate-600'

export const locationIcon = <FontAwesomeIcon className={baseStyle} icon={faLocationDot} />;
export const userIcon = <FontAwesomeIcon className={baseStyle} icon={faUser} />;
export const servicesIcon = <FontAwesomeIcon className={baseStyle} icon={faCogs} />;
export const contactusIcon = <FontAwesomeIcon className={baseStyle} icon={faPhone} />;
export const privacyIcon = <FontAwesomeIcon className={baseStyle} icon={faShieldAlt} />;
export const signoutIcon = <FontAwesomeIcon className={`${baseStyle} text-red-600`} icon={faSignOut} />;
export const caretDownIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faCaretDown} />;
export const caretupIcon = <FontAwesomeIcon className={`${baseStyle}`} icon={faCaretUp} />;