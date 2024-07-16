import { useState } from "react";
import { axiosInstance, custom_timeout } from "../assets/utils";
import axios from "axios";

export const usePostData = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const post_data = async (url, data) => {
        setResponse(null);
        setLoading(true);
        setError(null);
        await axiosInstance.post(url, data)
        .then(resp => {
            setResponse(resp.data);
            console.log("Posted data: ", resp.data);
        })
        .catch(err => {
            setError(err);
        })
        setLoading(false);
        console.log('inide post_data', response);
    }

    return { response, error, loading, post_data };
}
