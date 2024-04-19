import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface summonerAccount {
    puuid: string,
    gameName: string,
    tagLine: string,
};

const useSummoners = () => {
    const [summoner, setSummoner] = useState<summonerAccount>({} as summonerAccount);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get<summonerAccount>("/riot/riot/account/v1/accounts/by-riot-id/KHN%20HIPPO/LAS")
            .then((res) => {
                setSummoner(res.data);
            })
            .catch((err) => {
                setError(err);
            })
    }, []);

    return ({summoner, error});
};

export default useSummoners;