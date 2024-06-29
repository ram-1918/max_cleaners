import { useNavigate } from "react-router";
import { leftArrowIcon } from "../base/icons";

export default function BackButton({ text, path }) {
    const navigate = useNavigate();
    return (
        <span onClick={() => navigate(path)} className="cursor-pointer text-sky-700 font-extralight">{leftArrowIcon} {" "} {text}</span>
    )
}