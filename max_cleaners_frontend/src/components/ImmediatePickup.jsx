import { textcolor_1, textcolor_2, textcolor_3 } from "../assets/data";
import { navbar_option_styles } from "../base/baseStyles";

export default function ImmediatePickup({ ...props }) {
  return (
    <span {...props} className={`${navbar_option_styles}`}>
      Immediate Pickup?
    </span>
  );
}
