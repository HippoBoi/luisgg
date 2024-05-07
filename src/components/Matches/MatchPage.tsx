import { Center, HStack, Spinner, Text } from '@chakra-ui/react'
import textStyles from '../../TextStyles'
import { useParams } from 'react-router-dom'
import useMatch from '../../hooks/useMatch';
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
    
    console.log(match);

    let playerPos = match.metadata.participants.indexOf(summoner.puuid);
    let playerInfo = match.info.participants[playerPos];
    
    return (
        <>
        <Center>
            <Text 
                style={textStyles.textStyles.title} 
                fontSize={"45px"} 
                marginTop={"20px"}
                as={"i"}
                color={playerInfo.win ? "purple.200" : "pink.400"}>
                {playerInfo.win ? "Victoria" : "Derrota"}
            </Text>
        </Center>
        <HStack justifyContent={"space-between"} marginTop={"10px"}>
            <Text> hihihihi </Text>
            <HStack>
                <MatchPlayersInfo players={match.info.participants} teamId={100} />
                <MatchPlayersInfo players={match.info.participants} teamId={200} />
            </HStack>
            <Text> hihihihi </Text>
        </HStack>
        </>
    )
}

export default MatchPage
