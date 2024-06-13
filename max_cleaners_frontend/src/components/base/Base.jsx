import { Link } from "react-router-dom";

export const BaseCompanyLogo = () => {
    return (
        <span className="text-2xl font-light leading-7 tracking-wide">
            <span className="text-green-700 font-bold">Max</span>
            Cleaners</span>
    )
};

export const BaseButton = ({text, ...rest}) => {
    return (
        <button {...rest} className="w-32 text-center border border-green-500 px-2 py-2 bg-green-700 rounded-full shadow">{text}</button>
    );
};

export const BaseLink = ({text, path, ...rest}) => {
    return (
        <Link to={path} {...rest} className="w-32 text-center border border-green-500 px-2 py-2 bg-green-700 rounded-full shadow">{text}</Link>
    );
};

export const BaseFormHeader = ({text, ...rest}) => {
    return (
        <div {...rest} className="py-4 text-4xl flex flex-col justify-between items-center text-green-700 space-y-5 font-semibold leading-5 border-b-0">
            <span>{text}</span>
            <span {...rest} className="w-16 border-green-700 border-b-2 p-1"></span>
        </div>
    );
};

export const BaseFormLabel = ({text}) => {
    return (
        <span className="text-lg font-light leading-6 tracking-wide">{text}</span>
    );
};

export const BaseInputField = ({...rest}) => {
    return (
        <input {...rest} className="w-80 p-2 rounded-lg border border-gray-300 outline-none focus:border-green-600" />
    )
}

export const BaseTermsAndConditions = () => {
    return (
        <div className="w-full flex flex-row justify-center items-center space-x-4 text-sm font-light">
            <span>Policy Privacy</span>
            <span>Terms & Conditions</span>
        </div>
    )
}
