import useJSON from "../../hooks/useJSON";

interface championStats {
    armor: number;
    attackdamage: number;
    hp: number;
    crit: number;
    movespeed: number;
    mp: number;
    spellblock: number;
}

interface championBody {
    id: string;
    key: string;
    name: string;
    partype: string;
    stats: championStats;
    tags: string[];
    title: string;
}

interface championData {
    data: { [championName: string]: championBody }
    format: string;
    type: string;
    version: string;
}

const useChampions = (language: string) => useJSON<championData>(`https://ddragon.leagueoflegends.com/cdn/14.9.1/data/${language}/champion.json`);

export default useChampions;