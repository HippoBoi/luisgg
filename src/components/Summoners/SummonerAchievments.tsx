import { Card, CardBody, VStack, Text } from '@chakra-ui/react';
import textStyles from '../../TextStyles';
import { participantInfo } from '../Matches/useMatch';
import { useEffect, useState } from 'react';
import getTopStats from '../getTopStats';

interface Props {
    allPlayers: participantInfo[];
    player: participantInfo;
}

const SummonerAchievments = ({ allPlayers, player }: Props) => {
    const cardSize = "150px";
    const cardWidth = "110px";
    const [topDamage, setTopDamage] = useState(0);
    const [topTimeCCing, setTopTimeCCing] = useState(0);
    const [topGold, setTopGold] = useState(0);
    const [topFarm, setTopFarm] = useState(0);

    useEffect(() => {
        allPlayers.map((p) => console.log(p.timeCCingOthers, p.championName));

        setTopDamage(getTopStats.getTopDmg(allPlayers));
        setTopTimeCCing(getTopStats.getTopTimeCCing(allPlayers));
        setTopGold(getTopStats.getTopGold(allPlayers));
        setTopFarm(getTopStats.getTopFarm(allPlayers));
    }, [])

    console.log(topTimeCCing);

    return (
        <Card align={"flex-start"} minWidth={cardWidth} maxWidth={cardWidth} minHeight={cardSize} maxHeight={cardSize}>
            <Text as={"b"} color={"purple.200"}>Logros:</Text>
            <CardBody padding={1}>
                <VStack>
                    {player.firstBloodKill && <Text style={textStyles.textStyles.cardBody} color={"orange.300"}>- Primera Sangre</Text>}
                    {player.firstTowerKill && <Text style={textStyles.textStyles.cardBody} color={"blue.200"}>- Primera Torreta</Text>}
                    {player.totalDamageDealtToChampions >= topDamage && <Text style={textStyles.textStyles.cardBody} color={"red.300"}>- Top Daño</Text>}
                    {player.timeCCingOthers >= topTimeCCing && <Text style={textStyles.textStyles.cardBody} color={"purple.200"}>- Top CC a otros</Text>}
                    {player.goldEarned >= topGold && <Text style={textStyles.textStyles.cardBody} color={"yellow.200"}>- Top Oro</Text>}
                    {player.totalMinionsKilled + player.neutralMinionsKilled >= topFarm && <Text style={textStyles.textStyles.cardBody} color={"red.200"}>- Top Farm</Text>}
                    {player.tripleKills > 0 && <Text style={textStyles.textStyles.cardBody} color={"green.300"}>- Triple Kill</Text>}
                    {player.quadraKills > 0 && <Text style={textStyles.textStyles.cardBody} color={"red.400"}>- Quadra Kill</Text>}
                    {player.pentaKills > 0 && <Text style={textStyles.textStyles.cardBody} color={"red.500"}>- PentaKill</Text>}
                </VStack>
            </CardBody>
        </Card>
    )
}

export default SummonerAchievments