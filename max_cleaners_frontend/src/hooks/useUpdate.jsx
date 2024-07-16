import axios from "axios";
import { useState } from "react";

export const usePostData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const update_data = async (url, data) => {
        setData(null);
        setLoading(true);
        setError(null);
        await axios.patch(url, data)
        .then(resp => {
            custom_timeout(setLoading(false));
            setData(resp.data);
            console.log("Updated data: ", resp.data);
        })
        .catch(err => {
            custom_timeout(setLoading(false));
            setError(err);
        })
    }

    return { data, error, loading, update_data };
}