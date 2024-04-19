import useDataArray from "./useDataArray";

const useGames = (summonerPUUID: string) => useDataArray<string>(`/riot/lol/match/v5/matches/by-puuid/${summonerPUUID}/ids?start=0&count=1`,
    {params: { summonerPUUID: summonerPUUID }},
    [summonerPUUID]
);

export default useGames;