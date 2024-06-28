import { textcolor_2, textcolor_3 } from "../assets/data";

export default function Button({ text, ...props }) {
  return (
    <button
      {...props}
      style={{borderColor: textcolor_2, color: textcolor_2 }}
      className="border border-slate-300 rounded px-2 cursor:pointer hover:bg-sky-100 capitalize font-medium"
    >
      {text}
    </button>
  );
}
