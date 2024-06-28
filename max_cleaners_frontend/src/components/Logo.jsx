import { textcolor_1 } from "../assets/data";

export default function Logo({ text }) {
  return (
    <span
      style={{ color: textcolor_1 }}
      className="text-2xl font-semibold capitalize"
    >
      {text}
    </span>
  );
}
