import { Button, Card, CardBody, List, ListItem, Stack, Text } from '@chakra-ui/react';
import useSummoners, { summonerAccount } from '../../hooks/useSummoner';
import useGames from '../../hooks/useGames';
import { useState } from 'react';

interface Props {
    summonerId: string,
    onAdd: (summoner: summonerAccount) => void
}

const SummonerInfo = ({ summonerId, onAdd }: Props) => {
    const { data: summoner, error } = useSummoners(summonerId);
    const { data: leagueGame } = useGames(summoner.puuid);
    const [maxGames] = useState(20);

    if (!summoner.puuid) return <Text></Text>;
    if (error) return(<Text>{error}</Text>);

    return (
        <Stack>
            <Text as={"b"} fontSize={"2xl"}> 
                {summoner.gameName ? "Investigando a: " + summoner.gameName : "Invocador no encontrado."}
            </Text>
            <Card padding={5}>
                {"Últimas " + maxGames + " partidas"}
                <CardBody>
                    <List>
                    {Array.isArray(leagueGame) && leagueGame.map((game) => (
                        <ListItem key={game}>
                            {game}
                        </ListItem>
                    ))}
                    </List>
                </CardBody>
            </Card>
            <Button marginX={"20px"} onClick={() => onAdd(summoner)}>
                Añadir
            </Button>
        </Stack>
    );
}

export default SummonerInfo;
