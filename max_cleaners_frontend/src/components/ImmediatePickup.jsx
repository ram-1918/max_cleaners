import { navbar_option_styles } from "../base/baseStyles";
import { pickupIcon } from "../base/icons";

export default function ImmediatePickup({ ...props }) {
  return (
    <span {...props} className={`${navbar_option_styles}`}>
      {pickupIcon} Immediate Pickup?
    </span>
  );
}
