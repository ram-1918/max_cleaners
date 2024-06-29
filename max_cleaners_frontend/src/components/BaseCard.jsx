import { Link } from "react-router-dom";
import BackButton from "./BackButton";

export default function BaseCard({
    title,
    component1, 
    component2,
    nextPagePath,
    nextPageText,
    prevPagePath,
    prevPageText
}) {
    return (
        <div className='w-[55%] flex flex-col items-start justify-center space-y-2 border rounded-xl shadow-lg p-6 '>
            <BackButton text={prevPageText} path={prevPagePath} />
            <span className='w-full text-center text-2xl p-2'>{title}</span>
            <div className="w-full flex justify-center items-start space-x-10">
                {component1}
                {component2}
            </div>
            <div className='w-full text-right'>
                <Link to={nextPagePath} className='bg-sky-500 text-white px-2 py-2 text-center rounded-lg hover:opacity-70'>{nextPageText}</Link>
            </div>
        </div>
    )
}
