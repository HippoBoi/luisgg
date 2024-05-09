import { List, ListItem, Spinner, Text, VStack } from "@chakra-ui/react";
import { summonerAccount } from "./useSummoner";
import useChampionMastery from "../Champions/useChampionMastery";
import useChampions from "../Champions/useChampions";
import { useState } from "react";

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

    if (!masteries || !champions || !champions.data) return(<Text></Text>);
    let championNames = Object.keys(champions.data);

    return (
        <VStack>
        <Text as={"b"}>Mejores Champs:</Text>
        <List>
            {masteries.map((mastery, index) => (
                index < 10 &&
                championNames.map((champ) => (
                    parseInt(champions.data[champ].key) === mastery.championId &&
                    <ListItem>
                        <Text>{champions.data[champ].name}</Text>
                    </ListItem>
                ))
            ))}
        </List>
        </VStack>
    );
}

export default SummonerMasteryList
