import { Card, HStack, List, ListItem, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { participantInfo } from "./useMatch";
import ChampionIcon from "../Champions/ChampionIcon";
import MapLanes from "./MapLanes";
import SummonerBuild from "../Summoners/SummonerBuild";
import SummonerAchievments from "../Summoners/SummonerAchievments";

interface Props {
    players: participantInfo[];
    teamId: number;
}

const MatchPlayersInfo = ({ players, teamId }: Props) => {
    const blueTeam = teamId === 100 ? true : false;
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });
    const fontSize = "15px";
    const smallFontSize = "10px";

    return (
        <List>
            {players.map((player) => (
                <ListItem key={player.puuid}>
                    {player.teamId === teamId && (
                        <HStack>
                        {blueTeam && 
                        (
                        <>
                            {!isScreenSmall && (<SummonerAchievments player={player} />)}
                            <SummonerBuild player={player} />
                        </>
                        )}
                        <VStack spacing={"-25px"}>
                        <Text>{player.championName}</Text>
                        <Card 
                            minWidth={isScreenSmall ? "50px" : "250px"}
                            maxWidth={isScreenSmall ? "80px" : "350px"}
                            marginBottom={"15px"}
                            as={"button"} 
                            backgroundColor={blueTeam ? "purple.700" : "pink.800"}
                            _hover={{ backgroundColor: "purple.300" }}
                            alignItems={blueTeam ? "flex-start" : "flex-end"}
                            width={"100%"}>
                            <HStack>
                                {!blueTeam && <Text as={"i"} whiteSpace={"nowrap"} fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {player.riotIdGameName}
                                </Text>}
                                <ChampionIcon champion={player.championName} border={"medium"} />
                                {blueTeam && <Text as={"i"} whiteSpace={"nowrap"} fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {player.riotIdGameName}
                                </Text>}
                            </HStack>

                            <HStack>
                                {blueTeam && (<Text 
                                    as={"b"}
                                    color={blueTeam ? "purple.100" : "pink.200"}
                                    textDecoration="outline"
                                    borderColor={blueTeam ? "purple.300" : "pink.400"}
                                    borderWidth="1px"
                                    borderRadius="md"
                                    fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {player.kills + " / " + player.deaths + " / " + player.assists}
                                </Text>)}

                                <Text 
                                    as={"i"}
                                    color={blueTeam ? "purple.100" : "pink.200"}
                                    fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {"CS: " + (player.neutralMinionsKilled + player.totalMinionsKilled)}
                                </Text>
                                
                                {!blueTeam && (<Text 
                                    as={"b"}
                                    color={blueTeam ? "purple.100" : "pink.200"}
                                    textDecoration="outline"
                                    borderColor={blueTeam ? "purple.300" : "pink.400"}
                                    borderWidth="1px"
                                    borderRadius="md"
                                    fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {player.kills + " / " + player.deaths + " / " + player.assists}
                                </Text>)}
                            </HStack>

                            <HStack>
                                <Text fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    Posición: 
                                </Text>
                                <MapLanes 
                                    teamPos={player.teamPosition} 
                                    accent="b" 
                                    color="blue.200">
                                </MapLanes>
                            </HStack>
                            <HStack>
                                <Text fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    Oro: 
                                </Text>
                                <Text as={"b"} color={"yellow.300"} fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {player.goldEarned}
                                </Text>
                            </HStack>
                            <HStack>
                                <Text fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    Daño: 
                                </Text>
                                <Text as={"b"} color={"red.400"} fontSize={isScreenSmall ? smallFontSize : fontSize}>
                                    {player.totalDamageDealtToChampions}
                                </Text>
                            </HStack>
                            
                        </Card>
                        </VStack>
                        {!blueTeam && 
                        (
                            <>
                            <SummonerBuild player={player} />
                            {!isScreenSmall && (<SummonerAchievments player={player} />)}
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
