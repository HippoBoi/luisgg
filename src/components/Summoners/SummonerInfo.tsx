import { Spinner, Stack, Text } from '@chakra-ui/react';
import useSummoners from '../../hooks/useSummoner';
import SummonerGameList from './SummonerGameList';

interface Props {
    summonerId: string,
}

const SummonerInfo = ({ summonerId }: Props) => {
    const { data: summoner, error, isLoading } = useSummoners(summonerId);

    if (isLoading) return <Spinner></Spinner>
    if (!summoner) return <Text></Text>;
    if (error) return(<Text>{error}</Text>);

    return (
        <Stack>
            <Text as={"b"} fontSize={"2xl"}> 
                {summoner.gameName ? "Investigando a " + summoner.gameName : "Invocador no encontrado."}
            </Text>

            {summoner.gameName && (
                <>
                    <SummonerGameList summoner={summoner}></SummonerGameList>
                </>
            )}
        </Stack>
    );
}

export default SummonerInfo;
