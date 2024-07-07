import BackButton from "./BackButton";
import Header from "./Header";

export default function BaseCard({
  title,
  component1,
  component2,
  error,
  nextPageText,
  prevPagePath,
  prevPageText,
  ...props
}) {
  return (
    <div className="bg-white z-10 w-[55%] h-fit flex flex-col items-start justify-center space-y-2 border rounded-xl shadow-lg p-6 ">
      <BackButton text={prevPageText} path={prevPagePath} />
      <span className="w-full text-center">
        <Header text={title} />
      </span>
      {error && error}
      <div className="w-full flex justify-between items-start gap-2 p-1">
        {component1}
        {component2}
      </div>
      <div className="w-full text-right">
        <button
          type="button"
          {...props}
          className="bg-sky-500 text-white px-2 py-2 text-center rounded-lg hover:opacity-70"
        >
          {nextPageText}
        </button>
      </div>
    </div>
  );
}
