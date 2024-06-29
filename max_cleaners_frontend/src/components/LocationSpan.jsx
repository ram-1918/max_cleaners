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
