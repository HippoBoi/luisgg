import { Text, List, ListItem, VStack } from '@chakra-ui/react'
import { summonerAccount } from '../../hooks/useSummoner'
import textStyles from '../../TextStyles';

interface Props {
    summonersList: summonerAccount[]
}

const SummonersQuickAccess = ({ summonersList }: Props) => {
    return (
        <VStack>
            <Text fontSize={"2xl"} as={"i"} style={textStyles.textStyles.title}>
                Acceso Rápido
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

export default SummonersQuickAccess;
