import { Card, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import useMatch from "./useMatch";
import { summonerAccount } from "../Summoners/useSummoner";
import { useState } from "react";
import ChampionIcon from "../ChampionIcon";
import MapLanes from "./MapLanes";
import { Link } from "react-router-dom";

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
        <Link to={`/match/${summoner.gameName}/${summoner.tagLine}/${matchId}`}>
        <Card 
            width={"100%"}
            as={"button"}
            bgColor={playerInfo.win === true ? "purple.600" : "pink.700"}
            height={"50px"} 
            _hover={playerInfo.win === true ? { backgroundColor: "blue.300" } : { backgroundColor: "red.300" }}
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
        </Card>
        </Link>
    );
}

export default MatchCard;
