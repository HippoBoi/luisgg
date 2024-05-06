import useData from "../../hooks/useData";

export interface summonerAccount {
    puuid: string,
    gameName: string,
    tagLine: string,
};

const useSummoners = (gameName: string | undefined, tag: string | undefined) => {
    if (!gameName || !tag) {
        return(useData<summonerAccount>(`/riot/null`));
    }
    return (useData<summonerAccount>(`/riot/riot/account/v1/accounts/by-riot-id/${gameName}/${tag}`, 
    {params: { summonerId: gameName+tag }}, 
    [gameName+tag]));
};

export default useSummoners;