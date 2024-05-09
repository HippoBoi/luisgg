import { Box, Spinner, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import useSummoners from './useSummoner';
import SummonerGameList from './SummonerGameList';
import { useParams } from 'react-router-dom';
import SummonerMasteryList from './SummonerMasteryList';

const SummonerInfo = () => {
    const gameName = useParams().gameName;
    const tag = useParams().tag;
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });

    const { data: summoner, error, isLoading } = useSummoners(gameName, tag);

    if (isLoading) return (
        <VStack>
            <Spinner />
        </VStack>
    );

    if (!summoner) return <Text></Text>;
    if (error) return(<Text>{error}</Text>);

    return (
        <Box position={"relative"}>
            {!isScreenSmall && (
                <Box position="absolute" left="0">
                    <SummonerMasteryList summoner={summoner} />
                </Box>
            )}

            <Box position={"absolute"} left={"50%"} transform="translateX(-50%)">
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
            </Box>

            {!isScreenSmall && (
                <Box position="absolute" right="0">
                    <div>Elemento a la derecha</div>
                </Box>
            )}
        </Box>
    );
}

export default SummonerInfo;
