import useDataArray from "../../hooks/useDataArray";

export interface masteryJSON {
    puuid: string,
    championId: number,
    championLevel: number,
    championPoints: number,
    lastPlayTime: number,
    championPointsSinceLastLevel: number,
    championPointsUntilNextLevel: number,
    chestGranted: boolean,
    tokensEarned: number,
    summonerId: string
}

const useChampionMastery = (summonerPUUID: string, region: string) => useDataArray<masteryJSON>(`/riotOld/${region}/lol/champion-mastery/v4/champion-masteries/by-puuid/${summonerPUUID}`,
    {params: { summonerPUUID: summonerPUUID }},
    [summonerPUUID]
);

export default useChampionMastery;