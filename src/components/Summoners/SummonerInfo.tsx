import { Box, Spinner, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import useSummoners from './useSummoner';
import SummonerGameList from './SummonerGameList';
import { useParams } from 'react-router-dom';
import SummonerMasteryList from './SummonerMasteryList';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import RegionContext from '../RegionContext';
import regionToContinent from '../RegionToContinent';
import LegalBoilerplate from '../LegalBoilerplate';

const SummonerInfo = () => {
    const gameName = useParams().gameName;
    const tag = useParams().tag;
    const { region } = useContext(RegionContext);
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });
    const { data: summoner, error, isLoading } = useSummoners(gameName, tag, regionToContinent(region));

    const {language} = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "Investigando a ",,
            "Invocador no encontrado."
        ],
        "en": [
            "Inspecting ",
            "Summoner not found."
        ],
        "fr": [
            "Inspecter ",
            "Invocateur introuvable."
        ]
    };

    if (isLoading) return (
        <VStack>
            <Spinner />
        </VStack>
    );

    if (!summoner) return <Text></Text>;
    if (error) return(<Text>{error}</Text>);

    return (
        <>
        <Box position={"relative"}>
            {!isScreenSmall && (
                <Box position="absolute" left="1%">
                    <SummonerMasteryList summoner={summoner} />
                </Box>
            )}

            <Box position={"absolute"} left={"50%"} transform="translateX(-50%)">
                <VStack>
                    <Text as={"b"} fontSize={"2xl"}> 
                        {summoner.gameName ? textByLanguage[language][0] + summoner.gameName : textByLanguage[language][1]}
                    </Text>

                    {summoner.gameName && (
                        <>
                            <SummonerGameList summoner={summoner}></SummonerGameList>
                        </>
                    )}
                    <LegalBoilerplate />
                </VStack>
            </Box>
        </Box>
        
        </>
    );
}

export default SummonerInfo;
