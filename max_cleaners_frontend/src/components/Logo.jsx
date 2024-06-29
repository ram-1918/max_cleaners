import { textcolor_1 } from "../assets/data";

export default function Logo({ text, color='', ...rest }) {
  return (
    <span
      {...rest}
      style={{ color: color || textcolor_1 }}
      className="cursor-pointer text-2xl font-semibold capitalize"
    >
      {text}
    </span>
  );
}