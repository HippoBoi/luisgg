import { Card, CardBody, Stack, Text } from '@chakra-ui/react';
import useSummoners from '../../hooks/useSummoner';

interface Props {
    summonerId: string
}

const SummonerInfo = ({ summonerId }: Props) => {
    const {summoner, error} = useSummoners({ params: { summonerId: summonerId } }, [summonerId]); // parametros: (id)

    if (error) return(<Text>{error}</Text>);
    if (!summoner.puuid) return <Text></Text>;

    return (
        <Stack>
            <Text as={"b"} fontSize={"2xl"}> 
                {summoner.gameName ? "Investigando a: " + summoner.gameName : "Invocador no encontrado."}
            </Text>
            <Card padding={5}>
                Card part
                <CardBody>
                    CardBody
                </CardBody>
            </Card>
        </Stack>
    );
}

export default SummonerInfo;
