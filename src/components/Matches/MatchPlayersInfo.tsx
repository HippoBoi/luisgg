import { Card, HStack, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { participantInfo } from "./useMatch";
import ChampionIcon from "../Champions/ChampionIcon";
import { useState } from "react";
import MapLanes from "./MapLanes";
import SummonerBuild from "../Summoners/SummonerBuild";
import SummonerAchievments from "../Summoners/SummonerAchievments";

interface Props {
    players: participantInfo[];
    teamId: number;
}

const MatchPlayersInfo = ({ players, teamId }: Props) => {
    const blueTeam = teamId === 100 ? true : false;
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <List>
            {players.map((player) => (
                <ListItem key={player.puuid}>
                    {player.teamId === teamId && (
                        <HStack>
                        {blueTeam && 
                        (
                        <>
                            <SummonerAchievments player={player} />
                            <SummonerBuild player={player} />
                        </>
                        )}
                        <VStack spacing={"-25px"}>
                        <Text>{player.championName}</Text>
                        <Card 
                            minWidth={"250px"}
                            maxWidth={"350px"}
                            marginBottom={"15px"}
                            as={"button"} 
                            onClick={() => setDetailsOpen(!detailsOpen)}
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

                            <HStack>
                                <Text>Posición: </Text>
                                <MapLanes 
                                    teamPos={player.teamPosition} 
                                    accent="b" 
                                    color="blue.200">
                                </MapLanes>
                            </HStack>
                            <HStack>
                                <Text>Oro: </Text><Text as={"b"} color={"yellow.300"}>{player.goldEarned}</Text>
                            </HStack>
                            <HStack>
                                <Text>Daño: </Text><Text as={"b"} color={"red.400"}>{player.totalDamageDealtToChampions}</Text>
                            </HStack>
                            
                        </Card>
                        </VStack>
                        {!blueTeam && 
                        (
                            <>
                            <SummonerBuild player={player} />
                            <SummonerAchievments player={player} />
                            </>
                        )}
                        </HStack>
                    )}
                </ListItem>
            ))}
        </List>
    )
}

export default MatchPlayersInfo
