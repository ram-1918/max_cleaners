import { Link } from "react-router-dom";
import { editIcon } from "../base/icons";

export default function EditButton({ productid }) {
  return (
    <Link to={`./add-ons/${productid}`} className="text-sky-600" >
      {editIcon} Edit
    </Link>
  );
}
