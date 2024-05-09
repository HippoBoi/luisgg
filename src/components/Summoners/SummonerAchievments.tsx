import { Card, CardBody, VStack, Text } from '@chakra-ui/react';
import textStyles from '../../TextStyles';
import { participantInfo } from '../Matches/useMatch';

interface Props {
    player: participantInfo;
}

const SummonerAchievments = ({ player }: Props) => {
    const cardSize = "150px";
    const cardWidth = "110px";

    return (
        <Card minWidth={cardWidth} maxWidth={cardWidth} minHeight={cardSize} maxHeight={cardSize}>
            <Text as={"b"} color={"purple.200"}>Logros:</Text>
            <CardBody padding={1}>
                <VStack>
                {player.firstBloodKill && <Text style={textStyles.textStyles.cardBody} color={"orange.300"}>- Primera Sangre</Text>}
                {player.firstTowerKill && <Text style={textStyles.textStyles.cardBody} color={"blue.200"}>- Primera Torreta</Text>}
                </VStack>
            </CardBody>
        </Card>
    )
}

export default SummonerAchievments
