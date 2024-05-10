import useData from "../../hooks/useData";

export interface summonerAccount {
    puuid: string,
    gameName: string,
    tagLine: string,
};

const useSummoners = (gameName: string | undefined, tag: string | undefined, region: string) => {
    console.log(region);
    if (!gameName || !tag) {
        return(useData<summonerAccount>(`/riot/null/null`));
    }
    return (useData<summonerAccount>(`/riot/${region}/riot/account/v1/accounts/by-riot-id/${gameName}/${tag}`, 
    {params: { summonerId: gameName+tag }}, 
    [gameName+tag]));
};

export default useSummoners;