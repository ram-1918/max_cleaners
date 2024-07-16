
import { useEffect } from "react";
import { BaseInputField } from "../../base/Base";
import PasswordHelpOptions from "./PasswordHelpOptions";

export default function BaseForm({data, setData, initial_data, mapper, isLogin=false}){
    useEffect(() => {
        setData(initial_data);
    }, [setData, initial_data]);
    return (
        <form className="flex flex-col items-center justify-center space-y-2">
            {mapper.map(
                item => 
                    <div key={item.idx} className="space-y-1"> {item.email}
                        <BaseInputField
                            type={item.type}
                            value={data[item.value]}
                            placeholder={item.placeholder}
                            onChange={e => setData(prev => ({...prev, [item.value]: e.target.value}))}
                        />
                    </div>
                )
            }
            {isLogin && <PasswordHelpOptions />}
        </form>
    )
}