import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import RightDiv from "./RightDiv";
import LeftDiv from "./LeftDiv";

export default function BaseAuthForm() {
  const { type } = useParams();
  const isLogin = type === "login";
  const isRegister = type === "register";

  if (!isLogin && !isRegister) {
    return <PageNotFound />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200 select-none">
      <div className="w-[90%] h-[70%] border border-green-700 flex flex-row items-center justify-start rounded-3xl shadow-lg overflow-hidden bg-white">
        <LeftDiv isLogin={isLogin} isRegister={isRegister} />
        <RightDiv isLogin={isLogin} isRegister={isRegister} />
      </div>
    </div>
  );
}
