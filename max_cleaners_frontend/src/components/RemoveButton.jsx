import { trashIcon } from "../base/icons";

export default function RemoveButton({ ...props }) {
    return <span { ...props } className="text-red-700">{trashIcon} Remove</span>
}