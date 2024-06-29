export default function OrderSummaryDisplay({data}) {
    return (
        <div>
            {data.map((item, idx) => <span key={idx}>{item.name}</span> )}
        </div>
    )
}