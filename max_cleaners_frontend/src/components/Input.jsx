export default function Input({ placeholder, value, label, ...props }) {
    return (
        <fieldset className="border rounded-xl px-2 p-1">
            <legend className="ml-4">{label}</legend>
            <input {...props} className="outline-none w-64 border-none" value={value} placeholder={placeholder} />
        </fieldset>
    )
}