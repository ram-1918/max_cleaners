import { Link, useNavigate } from "react-router-dom";
import {
  BaseButton,
  BaseCompanyLogo,
  BaseFormHeader,
  BaseTermsAndConditions,
} from "../../components/base/Base";
import SSOLogin from "./SSOLogin";
import BaseForm from "./BaseForm";
import {
  initial_data_login,
  initial_data_register,
  input_field_mapper_login,
  input_field_mapper_register,
} from "./data_template";
import { useState } from "react";
import { setIsLoggedIn } from "../../state/slice";
import { useDispatch } from 'react-redux';
import { validateData } from "../../utils";


export default function LeftDiv({ isLogin, isRegister }) {
  return (
    <div className="small:w-full mobile:w-full tablet:w-[55%] laptop:w-[75%] py-2 h-full flex flex-col justify-center items-start">
      <div className="h-[10%] px-4 flex flex-col justify-start items-center">
        <BaseCompanyLogo />
      </div>
      <div className="w-full h-[90%] flex flex-col items-center justify-center space-y-2">
        <BaseFormHeader
          text={
            (isLogin && "Sign in to Account") ||
            (isRegister && "Create an Account")
          }
        />
        <SSOLogin />
        <DividingTextSpan />
        <BodyDiv isLogin={isLogin} isRegister={isRegister} />
        <BaseTermsAndConditions />
      </div>
    </div>
  );
}

const DividingTextSpan = () => {
  return <span className="text-sm font-light">Or use your email account</span>;
};

const BodyDiv = ({ isLogin, isRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleClick = () => {
    if (isLogin) {
      console.log("Clicked login Button and API call made", data);
    } else {
      // Register
      if (validateData(data)) {
        console.log("Clicked register Button and API call made");
      }
    }
    dispatch(setIsLoggedIn(true));
    localStorage.setItem('lg', true);    // Set login state in localstorage
    navigate('/');
  };

  const dataProps = {
    data: data,
    setData: setData,
  };
  return (
    <div className="h-full w-96 p-2 flex flex-col justify-start items-center space-y-5">
      {isLogin && (
        <BaseForm
          {...dataProps}
          isLogin={isLogin}
          initial_data={initial_data_login}
          mapper={input_field_mapper_login}
        />
      )}
      {isRegister && (
        <BaseForm
          {...dataProps}
          initial_data={initial_data_register}
          mapper={input_field_mapper_register}
        />
      )}
      <BaseButton
        onClick={() => handleClick()}
        style={{ color: "white" }}
        text={(isLogin && "Login") || (isRegister && "Register")}
      />
      <Link
        className="laptop:hidden tablet:hidden"
        to={(isLogin && "/auth/register") || (isRegister && "/auth/login")}
      >
        {(isLogin && "No account?") ||
          (isRegister && "Already had an account?")}
      </Link>
    </div>
  );
};
