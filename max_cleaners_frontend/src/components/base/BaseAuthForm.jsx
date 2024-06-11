import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import { BaseButton } from "./Base";
import { useParams } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";
import { useEffect, useState } from "react";

export default function BaseAuthForm() {
    const { type } = useParams();
    const [buttonText, setButtonText] = useState('');

    useEffect(() => {
        setButtonText(
            (type === 'login' && "Login") || 
            (type === 'register' && "Register")
        )
    }, [type]);

    if(type !== 'login' && type !== 'register') {
        return <PageNotFound />;
    };

    return (
        <div>
            Base Auth Form
            {type === 'login' && <LoginPage />}
            {type === 'register' && <RegisterPage />}
            <BaseButton onClick={() => {console.log('Clicked Auth Button')}} style={{}} text={buttonText} />
        </div>
    );
}
