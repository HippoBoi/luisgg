import { Card, HStack, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { participantInfo } from "../../hooks/useMatch";
import ChampionIcon from "../ChampionIcon";

interface Props {
    players: participantInfo[];
    teamId: number;
}

const MatchPlayersInfo = ({ players, teamId }: Props) => {
    const blueTeam = teamId === 100 ? true : false;

    return (
        <List>
            {players.map((player) => (
                <ListItem key={player.puuid}>
                    {player.teamId === teamId && (
                        <VStack spacing={"-25px"}>
                        <Text>{player.championName}</Text>
                        <Card 
                            marginBottom={"15px"}
                            as={"button"} 
                            backgroundColor={blueTeam ? "purple.700" : "pink.800"}
                            _hover={{ backgroundColor: "purple.300" }}
                            alignItems={blueTeam ? "flex-start" : "flex-end"}
                            width={"100%"}>
                            <HStack>
                                {!blueTeam && <Text as={"i"} whiteSpace={"nowrap"}>{player.riotIdGameName}</Text>}
                                <ChampionIcon champion={player.championName} border={"medium"} />
                                {blueTeam && <Text as={"i"} whiteSpace={"nowrap"}>{player.riotIdGameName}</Text>}
                            </HStack>

                            <HStack>
                                {blueTeam && (<Text 
                                    as={"b"}
                                    color={blueTeam ? "purple.100" : "pink.200"}
                                    textDecoration="outline"
                                    borderColor={blueTeam ? "purple.300" : "pink.400"}
                                    borderWidth="1px"
                                    borderRadius="md">
                                    {player.kills + " / " + player.deaths + " / " + player.assists}
                                </Text>)}

                                <Text 
                                    as={"i"}
                                    color={blueTeam ? "purple.100" : "pink.200"}>
                                    {"CS: " + (player.neutralMinionsKilled + player.totalMinionsKilled)}
                                </Text>
                                
                                {!blueTeam && (<Text 
                                    as={"b"}
                                    color={blueTeam ? "purple.100" : "pink.200"}
                                    textDecoration="outline"
                                    borderColor={blueTeam ? "purple.300" : "pink.400"}
                                    borderWidth="1px"
                                    borderRadius="md">
                                    {player.kills + " / " + player.deaths + " / " + player.assists}
                                </Text>)}
                            </HStack>
                        </Card>
                        </VStack>
                    )}
                </ListItem>
            ))}
        </List>
    )
}

export default MatchPlayersInfo
