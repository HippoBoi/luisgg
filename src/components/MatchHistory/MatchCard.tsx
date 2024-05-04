import { Button, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import useMatch from "../../hooks/useMatch";
import { summonerAccount } from "../../hooks/useSummoner";
import { useState } from "react";
import ChampionIcon from "../ChampionIcon";
import MapLanes from "./MapLanes";

interface Props {
    summoner: summonerAccount,
    matchId: string
}

const MatchCard = ({ summoner, matchId }: Props ) => {
    const {data: match, error, isLoading} = useMatch(matchId);
    const [infoOpen, setInfoOpen] = useState(false);
    const onClick = () => {
        setInfoOpen(!infoOpen);
    }
 
    if (!match || !match.metadata || !match.info) return(<Spinner></Spinner>);

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

    if (!playerInfo) return(<Spinner></Spinner>);
    console.log(playerInfo.riotIdGameName);

    return (
        <Button 
            marginX={"30px"}
            height={"50px"} 
            colorScheme={playerInfo.win === true ? "green" : "red"}
            onClick={onClick}>
        <HStack>
            <ChampionIcon champion={playerInfo.championName}></ChampionIcon>
        <VStack>
            <HStack>
                <Text>
                    {playerInfo.kills + " / " + playerInfo.deaths + " / " + playerInfo.assists}
                </Text>
            </HStack>
            <HStack>
                <MapLanes teamPos={playerInfo.teamPosition} />
            </HStack>
        </VStack>
            <Text>{match.info.gameMode}</Text>
        </HStack>
        </Button>
    );
}

export default MatchCard;
