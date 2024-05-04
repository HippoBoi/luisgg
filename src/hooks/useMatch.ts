import useData from "./useData";

interface participantInfo {
    championName: string,
    riotIdGameName: string,
    riotIdTagline: string,
    teamPosition: string,
    individualPosition: string,
    neutralMinionsKilled: number,
    totalMinionsKilled: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    goldEarned: number,
    kills: number,
    deaths: number,
    assists: number,
    win: boolean
}

interface metaData {
    dataVersion: number,
    matchId: string,
    participants: string[]
}

interface gameInfo {
    gameDuration: number,
    gameId: number,
    queueId: number,
    gameMode: string,
    gameType: string,
    platformId: string,
    participants: participantInfo[]
}

export interface matchBody {
    metadata: metaData
    info: gameInfo
}

const useMatch = (matchId: string) => useData<matchBody>(`/riot/lol/match/v5/matches/${matchId}`);

export default useMatch;