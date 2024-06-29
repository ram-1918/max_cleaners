export default function PriceSpan({ amount }) {
    return (
        <span className="text-md before:content-['$'] before:font-semibold">
            {amount}
        </span>
    )
}