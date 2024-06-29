import { textcolor_2 } from "../assets/data";

export default function Button({ text, ...props }) {
  return (
    <button
      {...props}
      style={{borderColor: textcolor_2, color: textcolor_2 }}
      className="border border-slate-300 rounded-lg py-1 px-2 bg-sky-50 cursor:pointer hover:bg-sky-100 capitalize font-medium"
    >
      {text} {props.icon && props.icon}
    </button>
  );
}
