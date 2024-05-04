import { Button, Card, CardBody, HStack, List, ListItem, Spinner, Text, VStack } from "@chakra-ui/react";
import useMatch from "../hooks/useMatch";
import { summonerAccount } from "../hooks/useSummoner";
import { useState } from "react";

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

    if (infoOpen) {
        return (
            <Card colorScheme="blue">
            <CardBody 
                padding={5} 
                as={"button"} 
                onClick={onClick}
                bgColor={"blue.800"}
                borderRadius={20}>
                <VStack>
                    <HStack>
                        <Text>
                            {playerInfo.championName + " - " + "CS: " + playerInfo.totalMinionsKilled + 
                            " - " + playerInfo.kills + " / " + playerInfo.deaths + " / " + playerInfo.assists}
                        </Text>
                    </HStack>

                    <List>
                    {match.info.participants.map((p) => (
                        <ListItem>
                            {p.championName + " - " + p.riotIdGameName}
                        </ListItem>
                    ))}
                    </List>
                </VStack>
            </CardBody>
            </Card>
        );
    }

    return (
        <Button 
            marginX={"30px"}
            height={"50px"} 
            colorScheme={playerInfo.win === true ? "green" : "red"}
            onClick={onClick}>
        <VStack>
            <HStack>
                <Text>
                    {playerInfo.championName + " - " + "CS: " + playerInfo.totalMinionsKilled + 
                    " - " + playerInfo.kills + " / " + playerInfo.deaths + " / " + playerInfo.assists}
                </Text>
            </HStack>
            <HStack>
                <Text>
                    {playerInfo.lane + "/" + playerInfo.role + " --- " + match.info.gameMode}
                </Text>
            </HStack>
        </VStack>
        </Button>
    );
}

export default MatchCard;
