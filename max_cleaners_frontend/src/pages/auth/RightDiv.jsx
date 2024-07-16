import { BaseFormHeader, BaseLink } from "../../base/Base";

export default function RightDiv({ isLogin, isRegister }) {
  const loginDescription = "Login to start working with us";
  const registerDescription =
    "Fill up your information and start journey with us";
  const styleProps = { color: "white", borderColor: "white" };
  return (
    <div
      style={{ backgroundColor: "rgba(4, 120, 87, 0.9)" }}
      className="small:hidden mobile:hidden tablet:flex tablet:w-[45%] laptop:w-[35%] laptop:flex h-full bg-transparent border-l flex-col justify-center items-center"
    >
      <div className="w-fit flex flex-col justify-center items-center space-y-4">
        <BaseFormHeader
          style={styleProps}
          text={
            (isRegister && "Sign in to Account") ||
            (isLogin && "Create an account")
          }
        />
        <DescriptionSpan
          style={styleProps}
          text={
            (isLogin && loginDescription) || (isRegister && registerDescription)
          }
        />
        <BaseLink
          path={(isLogin && "/auth/register") || (isRegister && "/auth/login")}
          style={styleProps}
          text={(isLogin && "Register") || (isRegister && "Login")}
        />
      </div>
    </div>
  );
}

const DescriptionSpan = ({ text, ...rest }) => {
  return (
    <span {...rest} className="whitespace-pre-line">
      {text}
    </span>
  );
};
