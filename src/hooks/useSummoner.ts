import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface summonerAccount {
    puuid: string,
    gameName: string,
    tagLine: string,
};

const useSummoners = (summonerId: string) => {
    const [summoner, setSummoner] = useState<summonerAccount>({} as summonerAccount);
    const [error, setError] = useState("");
    const [name, tag] = summonerId.split("/");

    useEffect(() => {
        console.log(name, tag);
        apiClient.get<summonerAccount>(`/riot/riot/account/v1/accounts/by-riot-id/${name}/${tag}`)
            .then((res) => {
                setSummoner(res.data);
            })
            .catch((err) => {
                setError(err);
            })
    }, [{ 
            summonerId
        }]);

    return ({summoner, error});
};

export default useSummoners;