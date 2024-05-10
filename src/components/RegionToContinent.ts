const regionToContinent = (region: string) => {
    const regionMap: { [key: string]: string } = {
        "LA1": "americas", "LA2": "americas", "NA1": "americas", "BR1": "americas",
        "KR": "asia", "JP1": "asia",
        "EUN1": "europe", "EUW1": "europe", "TR1": "europe", "RU": "europe",
        "OC1": "sea", "PH2": "sea", "SG2": "sea", "TH2": "sea", "TW2": "sea", "VN2": "sea"
    };
    const continent = regionMap[region];

    return(continent || "invalid region");
}

export default regionToContinent;