import { participantInfo } from "./Matches/useMatch";

const getTopDmg = (players: participantInfo[]) => {
    let maxDmg = 0;
    maxDmg = players[0].totalDamageDealtToChampions;
    players.map((player) => {
        if (player.totalDamageDealtToChampions > maxDmg)
            maxDmg = player.totalDamageDealtToChampions;
    });

    return(maxDmg);
}

const getTopTimeCCing = (players: participantInfo[]) => {
    let maxCC = 0;
    maxCC = players[0].timeCCingOthers;
    players.map((player) => {
        if (player.timeCCingOthers > maxCC)
            maxCC = player.timeCCingOthers;
    });

    return(maxCC);
}

const getTopGold = (players: participantInfo[]) => {
    let maxGold = 0;
    maxGold = players[0].goldEarned;
    players.map((player) => {
        if (player.goldEarned > maxGold)
            maxGold = player.goldEarned;
    });

    return(maxGold);
}

const getTopFarm = (players: participantInfo[]) => {
    let maxFarm = 0;
    maxFarm = players[0].totalMinionsKilled + players[0].neutralMinionsKilled;
    players.map((player) => {
        if (player.totalMinionsKilled + player.neutralMinionsKilled > maxFarm)
            maxFarm = player.totalMinionsKilled + player.neutralMinionsKilled;
    });

    return(maxFarm);
}

export default {getTopDmg, getTopTimeCCing, getTopGold, getTopFarm};