import { useState } from "react";
import { axiosInstance } from "../assets/utils";

export const useFetchData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetch_data = async (url) => {
        await axiosInstance.get(url)
        .then(resp => {
            setData(resp.data);
            console.log('call made')
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
    };

    return { data, error, loading, fetch_data };
}