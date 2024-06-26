import { Card, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import useMatch from "./useMatch";
import { summonerAccount } from "../Summoners/useSummoner";
import { useContext, useState } from "react";
import ChampionIcon from "../Champions/ChampionIcon";
import MapLanes from "./MapLanes";
import { Link } from "react-router-dom";
import useQueueInfo from "./useQueueInfo";
import SummonerBuild from "../Summoners/SummonerBuild";
import RegionContext from "../RegionContext";
import regionToContinent from "../RegionToContinent";

interface Props {
    summoner: summonerAccount,
    matchId: string
}

const MatchCard = ({ summoner, matchId }: Props ) => {
    const { region } = useContext(RegionContext);
    const {data: match, error, isLoading} = useMatch(matchId, regionToContinent(region));
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

    return (
        <Link to={`/match/${summoner.gameName}/${summoner.tagLine}/${matchId}`}>
        <Card 
            width={"100%"}
            as={"button"}
            bgColor={playerInfo.win === true ? "purple.600" : "pink.700"}
            minWidth={"250px"}
            maxWidth={"250px"}
            minHeight={"60px"} 
            maxHeight={"100px"}
            _hover={
                playerInfo.win === true ? { 
                    transform: "scale(1.10)", 
                    transition: "transform .01s ease-in",
                    backgroundColor: "blue.300" 
                } : { 
                    transform: "scale(1.10)", 
                    transition: "transform .01s ease-in",
                    backgroundColor: "red.300" 
                }
            }
            onClick={onClick}>
            <HStack>
                <ChampionIcon champion={playerInfo.championName}></ChampionIcon>
            <VStack>
                <HStack>
                    <Text whiteSpace={"nowrap"}>
                        {playerInfo.kills + " / " + playerInfo.deaths + " / " + playerInfo.assists}
                    </Text>
                    <SummonerBuild player={playerInfo} />
                </HStack>
                <HStack>
                    <Text as={"b"} color={"pink.200"}>{playerInfo.championName}</Text>
                    <MapLanes teamPos={playerInfo.teamPosition} />
                </HStack>
            </VStack>
                <Text as={"b"} color={"purple.100"}>{useQueueInfo(match.info.queueId)}</Text>
            </HStack>
        </Card>
        </Link>
    );
}

export default MatchCard;
