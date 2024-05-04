import useData from "./useData";

export interface summonerAccount {
    puuid: string,
    gameName: string,
    tagLine: string,
};

const useSummoners = (summonerId: string) => {
    const [name, tag] = summonerId.split("/");
    return (useData<summonerAccount>(`/riot/riot/account/v1/accounts/by-riot-id/${name}/${tag}`, 
    {params: { summonerId: summonerId }}, 
    [summonerId]));
};

export default useSummoners;