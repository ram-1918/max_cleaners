import { searchIcon } from "./base/BaseIcons";

export default function SearchBar() {
    return (
        <span className="w-80 border border-sky-200 rounded-lg flex justify-between items-center overflow-hidden focus:border-blue-400">
            <input type="text" className="border-none w-full outline-none px-2 py-1" />
            <span className="h-full px-2 py-1 bg-sky-200 cursor-pointer">{searchIcon}</span>
        </span>
    )
}