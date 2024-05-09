import { useEffect, useState } from "react";
import axios from "axios";
import { AxiosRequestConfig, CanceledError } from "axios";

const useJSON = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T>({} as T);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        axios.get<T>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err);
                setLoading(false);
            })
        
        return () => controller.abort();
    }, deps ? [...deps] : []);
    return ({ data, error, isLoading });
};

export default useJSON;