import { Button, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import useMatch from "../hooks/useMatch";
import { summonerAccount } from "../hooks/useSummoner";
import MapLanes from "./MapLanes";

interface Props {
    summoner: summonerAccount,
    matchId: string
}

const MatchCard = ({ summoner, matchId }: Props ) => {
    const {data: match, error, isLoading} = useMatch(matchId);

    if (isLoading || Object.keys(match).length <= 0) {
        return(
            <Spinner></Spinner>
        );
    }
    if (error) {
        return(
            <Text>{error}</Text>
        );
    }

    let playerPos = match.metadata.participants.indexOf(summoner.puuid);
    let playerInfo = match.info.participants[playerPos];
    console.log(playerPos, playerInfo.riotIdGameName);

    return (
        <Button height={"50px"} colorScheme={playerInfo.win === true ? "green" : "red"}>
        <VStack>
            <HStack>
                <Text>
                    {playerInfo.championName + " - " + "CS: " + playerInfo.totalMinionsKilled + 
                    " - " + playerInfo.kills + " / " + playerInfo.deaths + " / " + playerInfo.assists}
                </Text>
            </HStack>
            <HStack>
                <Text>
                    {playerInfo.lane + "/" + playerInfo.role}
                </Text>
            </HStack>
        </VStack>
        </Button>
    );
}

export default MatchCard;
