import { VStack, Text, List, ListItem } from "@chakra-ui/react";
import textStyles from "../../TextStyles";
import { summonerAccount } from "./useSummoner";

interface Props {
    summonersList: summonerAccount[]
}

const SummonersList = ({ summonersList }: Props) => {
    return (
        <VStack>
            <Text fontSize={"2xl"} as={"i"} style={textStyles.textStyles.title}>
                Lista de Invocadores
            </Text>
            <List>
                {summonersList.map((summoner) => (
                    <ListItem key={summoner.puuid}>
                        {summoner.gameName}
                    </ListItem>
                ))}
            </List>
        </VStack>
    );
}

export default SummonersList
