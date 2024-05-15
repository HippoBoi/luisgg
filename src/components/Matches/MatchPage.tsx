import { Box, Button, Center, Spinner, Text, VStack } from '@chakra-ui/react'
import textStyles from '../../TextStyles'
import { useNavigate, useParams } from 'react-router-dom'
import useMatch from './useMatch';
import MatchPlayersInfo from './MatchPlayersInfo';
import useSummoners from '../Summoners/useSummoner';
import { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import RegionContext from '../RegionContext';
import regionToContinent from '../RegionToContinent';
import LegalBoilerplate from '../LegalBoilerplate';

const MatchPage = () => {
    const matchId = useParams().matchId;
    const summonerName = useParams().gameName;
    const summonerTag = useParams().tag;
    const navigate = useNavigate();

    const { region } = useContext(RegionContext);

    const { data: summoner, error: sumError, isLoading: isSummonerLoading } = useSummoners(summonerName, summonerTag, regionToContinent(region));
    const { data: match, error, isLoading } = useMatch(matchId, regionToContinent(region));

    const {language} = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "Victoria",
            "Derrota"
        ],
        "en": [
            "Victory",
            "Defeat"
        ],
        "fr": [
            "Victoire",
            "Défaite"
        ]
    };

    if (!match || !summoner || isSummonerLoading || !match.metadata || !match.info 
    || isLoading || Object.keys(match).length <= 0) /// a buuunch of ifs
        return(<Spinner></Spinner>);

    if (error) return(<Text>{error}</Text>);
    if (sumError) return(<Text>{sumError}</Text>)

    let playerPos = match.metadata.participants.indexOf(summoner.puuid);
    let playerInfo = match.info.participants[playerPos];
    let matchMinutes = Math.floor((match.info.gameDuration % 3600) / 60);
    let matchSeconds = match.info.gameDuration % 60;
    
    return (
        <>
        <Center>
            <VStack>
            <Text 
                style={textStyles.textStyles.title} 
                fontSize={"45px"} 
                marginTop={"20px"}
                as={"i"}
                color={playerInfo.win ? "purple.200" : "pink.400"}>
                {playerInfo.win ? textByLanguage[language][0] : textByLanguage[language][1]}
            </Text>
            <Text color={"gray.300"}>
                {"Duración: " + matchMinutes + ":" + matchSeconds}
            </Text>
            <Button onClick={() => navigate(-1)}>
                Return to Match History
            </Button>
            </VStack>
        </Center>
        <Box position={"relative"}>
            <Box position={"absolute"} left={"0%"}>
                <MatchPlayersInfo players={match.info.participants} teamId={100} />
            </Box>
            <Box position={"absolute"} right={"0%"}>
                <MatchPlayersInfo players={match.info.participants} teamId={200} />
            </Box>
            <Box position={"absolute"} left={"0%"}>
                <LegalBoilerplate marginTop={900} />
            </Box>
        </Box>
        </>
    )
}

export default MatchPage
