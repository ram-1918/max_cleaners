import { TopnavSec2Styles } from "./LocationSpan";
import { clockIcon } from "./base/BaseIcons";

export default function ScheduleAPickupSpan() {
    return (
        <span className={`${TopnavSec2Styles}`}>
            {clockIcon} Schedule a pick up now
        </span>
    )
}