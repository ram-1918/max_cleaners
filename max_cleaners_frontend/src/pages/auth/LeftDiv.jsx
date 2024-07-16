import { Link, useNavigate } from "react-router-dom";
import {
  BaseButton,
  BaseCompanyLogo,
  BaseFormHeader,
  BaseTermsAndConditions,
} from "../../base/Base";
import SSOLogin from "./SSOLogin";
import BaseForm from "./BaseForm";
import {
  initial_data_login,
  initial_data_register,
  input_field_mapper_login,
  input_field_mapper_register,
} from "./data_template";
import { useEffect, useState } from "react";
import { API_URL, axiosInstance, save_to_local, validateData } from "../../assets/utils";
import { currentUserIdAtom, isLoggedInAtom } from "../../recoil_state/atoms";
import { useRecoilState } from "recoil";
import { usePostData } from "../../hooks/usePostData";

export default function LeftDiv({ isLogin, isRegister }) {
  return (
    <div className="small:w-full mobile:w-full tablet:w-[55%] laptop:w-[75%] py-2 h-full flex flex-col justify-center items-start">
      <div className="h-[10%] px-4 flex flex-col justify-start items-center">
        <BaseCompanyLogo />
      </div>
      <div className="w-full h-[95%] flex flex-col items-center justify-center space-y-2">
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
  const [, setIsLoggedin] = useRecoilState(isLoggedInAtom);
  const [, setCurrentUserId] = useRecoilState(currentUserIdAtom);
  const [data, setData] = useState({});
  const { response, error, loading, post_data } = usePostData();
  const navigate = useNavigate();

  useEffect(() => {
    if(response) {
      setIsLoggedin(true);
      save_to_local('lg', 'true');
      save_to_local('userid', response.id);
      setCurrentUserId(response.id);
      console.log('login', response, error, loading);
      navigate('/');
    }
  }, [response, navigate, setCurrentUserId, setIsLoggedin]);

  const handleClick = (e) => {
    e.preventDefault();

    if (isLogin) {
      const url = `${API_URL}/user/login`;
      post_data(url, data);

    } else if (isRegister) {
      if (validateData(data)) {
        const url = `${API_URL}/user/register`;
        post_data(url, data);

        if (!error) {
          navigate('/auth/login');
        } else {
          console.error('Registration failed', error);
        }
      } else {
        console.error('Validation failed');
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }



  // const [, setIsLoggedin] = useRecoilState(isLoggedInAtom);
  // const [, setCurrentUserLoginInfo] = useRecoilState(currentUserLoginInfoAtom);
  // const [data, setData] = useState({});
  // const { response, error, loading, post_data } = usePostData();

  // const handleClick = async e => {
  //   e.preventDefault();
  //   if (isLogin) {
  //     const url = `${API_URL}/user/login`;
  //     await post_data(url, data);
  //     setIsLoggedin(true);
  //     localStorage.setItem('lg', true);    // Set login state in localstorage
  //     setCurrentUserLoginInfo(response);
  //     console.log('login', response, error, loading);
  //     // navigate('/');

  //   } else if (isRegister) {
  //     if (validateData(data)) {
  //       const url = `${API_URL}/user/register`;
  //       // await post_data(url, data);
  //       if (null === null) {
  //         navigate('/auth/login');
  //       }
  //     }
  //   }
  // };

  // if (false) {
  //   return <div>Loading...</div>;
  // }

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
        onClick={(e) => handleClick(e)}
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
