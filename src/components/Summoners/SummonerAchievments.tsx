import { Card, CardBody, VStack, Text } from '@chakra-ui/react';
import textStyles from '../../TextStyles';
import { participantInfo } from '../Matches/useMatch';
import { useContext, useEffect, useState } from 'react';
import getTopStats from '../../services/getTopStats';
import LanguageContext from '../LanguageContext';

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
    
    const {language: lang} = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "- Primera Sangre",
            "- Primera Torreta",
            "- Top Daño",
            "- Top CC a otros",
            "- Top Oro"
        ],
        "en": [
            "- First Blood",
            "- First Turret",
            "- Top Damage",
            "- Top CC Dealt",
            "- Top Gold"
        ],
        "fr": [
            "- Premier sang",
            "- Première Tourelle",
            "- Top Dommage",
            "- Top CC traité",
            "- Top Or"
        ]
    };

    useEffect(() => {
        setTopDamage(getTopStats.getTopDmg(allPlayers));
        setTopTimeCCing(getTopStats.getTopTimeCCing(allPlayers));
        setTopGold(getTopStats.getTopGold(allPlayers));
        setTopFarm(getTopStats.getTopFarm(allPlayers));
    }, [])

    return (
        <Card align={"flex-start"} minWidth={cardWidth} maxWidth={cardWidth} minHeight={cardSize} maxHeight={cardSize}>
            <Text as={"b"} color={"purple.200"}>Logros:</Text>
            <CardBody padding={1}>
                <VStack>
                    {player.firstBloodKill && <Text style={textStyles.textStyles.cardBody} color={"orange.300"}>{textByLanguage[lang][0]}</Text>}
                    {player.firstTowerKill && <Text style={textStyles.textStyles.cardBody} color={"blue.200"}>{textByLanguage[lang][1]}</Text>}
                    {player.totalDamageDealtToChampions >= topDamage && <Text style={textStyles.textStyles.cardBody} color={"red.300"}>{textByLanguage[lang][2]}</Text>}
                    {player.timeCCingOthers >= topTimeCCing && <Text style={textStyles.textStyles.cardBody} color={"purple.200"}>{textByLanguage[lang][3]}</Text>}
                    {player.goldEarned >= topGold && <Text style={textStyles.textStyles.cardBody} color={"yellow.200"}>{textByLanguage[lang][4]}</Text>}
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