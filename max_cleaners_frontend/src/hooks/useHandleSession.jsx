import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { activeOrderSessionAtom } from "../recoil_state/atoms";
import { useEffect } from "react";
import { save_to_local } from "../assets/utils";

export default function useHandleSession(page_name, key) {
    const navigate = useNavigate();
    const [activeOrderSession, setActiveOrderSession] = useRecoilState(activeOrderSessionAtom);
    useEffect(() => {
      if(!activeOrderSession.activeSession) {
        navigate('/');
      }
      setActiveOrderSession(prev => ({...prev, [page_name]: true}));
      save_to_local('session', {...activeOrderSession, [key]: true});
      console.log(page_name, key);
    }, [setActiveOrderSession, page_name, key, navigate]);
}