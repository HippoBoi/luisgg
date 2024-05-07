import useData from "../../hooks/useData";

export interface participantInfo {
    championName: string,
    riotIdGameName: string,
    riotIdTagline: string,
    puuid: string,
    teamPosition: string,
    individualPosition: string,
    teamId: number,
    neutralMinionsKilled: number,
    totalMinionsKilled: number,
    totalDamageDealtToChampions: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    spell4Casts: number,
    goldEarned: number,
    goldSpent: number,
    kills: number,
    doubleKills: number,
    tripleKills: number,
    quadraKills: number,
    pentaKills: number,
    dragonKills: number,
    deaths: number,
    assists: number,
    timeCCingOthers: number,
    firstBloodKill: boolean,
    firstTowerKill: boolean,
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
    endOfGameResult: string,
    gameMode: string,
    gameType: string,
    platformId: string,
    participants: participantInfo[]
}

export interface matchBody {
    metadata: metaData
    info: gameInfo
}

const useMatch = (matchId: string | undefined) => useData<matchBody>(`/riot/lol/match/v5/matches/${matchId}`);

export default useMatch;