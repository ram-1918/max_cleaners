import { rightArrowIcon } from "../base/icons";

export default function ActivityCard({
  icon,
  bgcolor,
  anchor,
  ...rest
}) {
  return (
    <div
      style={{ backgroundColor: bgcolor }}
      className="group/item w-[25%] h-48 rounded-xl border flex flex-col justify-between items-start p-4"
    >
        <IconSpan icon={icon} />
        <DetailSpan { ...rest } />
        <AnchorSpan anchor={anchor} {...rest} />
    </div>
  );
}

function IconSpan({ icon }) {
    return (
        <div className="rounded-full border px-2 py-1 text-xl bg-white">
            {icon}
        </div>
    )
}

function DetailSpan({ heading, details, count="", text="" }) {
    return (
        <div className="flex flex-col justify-end items-start">
            <span className="text-xl font-medium capitalize">{heading}</span>
            {count && <span className="text-3xl font-semibold">{count}</span>}
            {text && <span className="text-lg">{text}</span>}
            <span className="text-sm">{details}</span>
        </div>
    )
}

function AnchorSpan({ anchor, ...rest }) {
    return (
        <button {...rest} className="group-hover/item:scale-105 group-hover/item:font-bold cursor-pointer transition ease-in-out duration-150 text-sm w-full text-right font-light capitalize px-2">
            {anchor} {rightArrowIcon}
        </button>
    )
}