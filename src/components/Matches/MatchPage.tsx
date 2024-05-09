import { Center, HStack, Spinner, Text, VStack } from '@chakra-ui/react'
import textStyles from '../../TextStyles'
import { useParams } from 'react-router-dom'
import useMatch from './useMatch';
import MatchPlayersInfo from './MatchPlayersInfo';
import useSummoners from '../Summoners/useSummoner';

const MatchPage = () => {
    const matchId = useParams().matchId;
    const summonerName = useParams().gameName;
    const summonerTag = useParams().tag;

    const { data: summoner, error: sumError, isLoading: isSummonerLoading } = useSummoners(summonerName, summonerTag);
    const { data: match, error, isLoading } = useMatch(matchId);

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
                {playerInfo.win ? "Victoria" : "Derrota"}
            </Text>
            <Text color={"gray.300"}>
                {"Duración: " + matchMinutes + ":" + matchSeconds}
            </Text>
            </VStack>
        </Center>
        <HStack justifyContent={"space-between"} marginTop={"10px"}>
            <Text> -- </Text>
            <HStack spacing={"20px"}>
                <MatchPlayersInfo players={match.info.participants} teamId={100} />
                <MatchPlayersInfo players={match.info.participants} teamId={200} />
            </HStack>
            <Text> -- </Text>
        </HStack>
        </>
    )
}

export default MatchPage
