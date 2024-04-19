import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface summonerAccount {
    puuid: string,
    gameName: string,
    tagLine: string,
};

const useSummoners = (requestConfig: AxiosRequestConfig, deps?: any[]) => {
    const [summoner, setSummoner] = useState<summonerAccount>({} as summonerAccount);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [name, tag] = requestConfig.params.summonerId.split("/");

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<summonerAccount>(`/riot/riot/account/v1/accounts/by-riot-id/${name}/${tag}`, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setSummoner(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err);
                setLoading(false);
            })
        
        return () => controller.abort();
    }, deps ? [...deps] : []);

    return ({ summoner, error, isLoading });
};

export default useSummoners;