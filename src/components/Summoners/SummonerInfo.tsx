import { Spinner, Text, VStack } from '@chakra-ui/react';
import useSummoners from './useSummoner';
import SummonerGameList from './SummonerGameList';
import { useParams } from 'react-router-dom';

const SummonerInfo = () => {
    const gameName = useParams().gameName;
    const tag = useParams().tag;

    const { data: summoner, error, isLoading } = useSummoners(gameName, tag);

    if (isLoading) return (
        <VStack>
            <Spinner />
        </VStack>
    );

    if (!summoner) return <Text></Text>;
    if (error) return(<Text>{error}</Text>);

    return (
        <VStack>
            <Text as={"b"} fontSize={"2xl"}> 
                {summoner.gameName ? "Investigando a " + summoner.gameName : "Invocador no encontrado."}
            </Text>

            {summoner.gameName && (
                <>
                    <SummonerGameList summoner={summoner}></SummonerGameList>
                </>
            )}
        </VStack>
    );
}

export default SummonerInfo;
