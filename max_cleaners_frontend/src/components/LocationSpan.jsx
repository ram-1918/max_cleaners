import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { locationIcon } from './base/BaseIcons';

export const TopnavSec2Styles = 'px-2 py-1 hover:text-sky-700 cursor-pointer rounded-full font-medium';

export default function LocationSpan() {
    return (
        <span className={`${TopnavSec2Styles}`}>
            {locationIcon} Edison, NJ
        </span>
    )
}