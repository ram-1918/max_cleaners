export const BaseButton = ({text, ...rest}) => {
    return (
        <button {...rest} className="border-none px-2 py-1 rounded-lg shadow">{text}</button>
    )
}