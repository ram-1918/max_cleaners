export default function Input({
  error,
  type,
  value,
  label,
  disable = false,
  ...props
}) {
  return (
    <fieldset
      className={`${
        (disable && "bg-gray-100", error[label] && "border-red-500")
      } w-full border rounded-xl px-2 p-1`}
    >
      <legend
        className={`${
          (disable && "bg-white", error[label] && "text-red-500")
        } ml-4 px-2 capitalize`}
      >
        {label}
      </legend>
      <input
        {...props}
        type={type}
        className={`${
          disable && "disabled:bg-transparent"
        } outline-none w-64 border-none`}
        value={value}
        disabled={disable}
      />
    </fieldset>
  );
}
