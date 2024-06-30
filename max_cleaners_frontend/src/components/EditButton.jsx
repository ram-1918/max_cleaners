import { editIcon } from "../base/icons";

export default function EditButton({ ...props }) {
    return <span {...props} className="text-sky-600">{editIcon} Edit</span>
}