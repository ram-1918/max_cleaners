import { textcolor_1, textcolor_2, textcolor_3 } from "../assets/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { locationIcon } from "../base/icons";
import { navbar_option_styles } from "../base/baseStyles";

export default function LocationSpan({ locationText }) {
  return (
    <span
      className={`${navbar_option_styles}`}
    >
        {locationIcon} {locationText}
    </span>
  );
}
