import { List, ListItem, Spinner, Text, VStack } from "@chakra-ui/react";
import { summonerAccount } from "./useSummoner";
import useChampionMastery from "../Champions/useChampionMastery";
import useChampions from "../Champions/useChampions";
import { useContext, useState } from "react";
import ChampionInfoCard from "../Champions/ChampionInfoCard";
import LanguageContext from "../LanguageContext";

interface Props {
    summoner: summonerAccount
}

const SummonerMasteryList = ({ summoner }: Props) => {
    const [language] = useState("en_US");
    const { data: masteries, error: masteryError, isLoading: masteryLoading } = useChampionMastery(summoner.puuid);
    const { data: champions, error: champError, isLoading: champLoading } = useChampions(language);

    if (masteryLoading || champLoading) return(<Spinner></Spinner>);

    if (masteryError) return(<Text>{masteryError}</Text>);
    if (champError) return(<Text>{champError}</Text>);

    if (!masteries.map || !champions || !champions.data) return(<Text>Couldn't load</Text>);
    let championNames = Object.keys(champions.data);

    const {language: curLanguage} = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "Mejores Champs:",
        ],
        "en": [
            "Best Champs:"
        ],
        "fr": [
            "Meilleurs Champs :",
        ]
    };

    return (
        <VStack marginBottom={"30px"}>
        <Text as={"b"}>{textByLanguage[curLanguage][0]}</Text>
        <List spacing={5} alignContent={"start"}>
            {masteries.map((mastery, index) => (
                index < 6 &&
                championNames.map((champ) => (
                    parseInt(champions.data[champ].key) === mastery.championId &&
                    <ListItem>
                        <ChampionInfoCard champion={champions.data[champ]} mastery={mastery} />
                    </ListItem>
                ))
            ))}
        </List>
        </VStack>
    );
}

export default SummonerMasteryList;
