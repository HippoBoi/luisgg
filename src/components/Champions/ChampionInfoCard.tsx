import { Card, HStack, VStack, Text } from '@chakra-ui/react'
import ChampionIcon from './ChampionIcon'
import { championBody } from './useChampions';
import { masteryJSON } from './useChampionMastery';
import { useState } from 'react';

interface Props {
    champion: championBody;
    mastery: masteryJSON;
}

const ChampionInfoCard = ({ champion, mastery }: Props) => {
    const [mouseHovering, setMouseHovering] = useState(false);
    const numberWithDots = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <Card 
            onMouseEnter={() => setMouseHovering(true)}
            onMouseLeave={() => setMouseHovering(false)}
            _hover={{ 
                transform: "scale(1.10)",
                transition: "transform .1s ease-out"
             }}
            bgColor={mouseHovering ? "#6c479d" : "#402757"}>
            <VStack>
                <Text as={"b"}>
                    {champion.name}
                </Text>
                <ChampionIcon champion={champion.name} />
                <HStack>
                <Text 
                    color={"yellow.200"}>
                    {numberWithDots(mastery.championPoints)}
                </Text>
                <Text>{" puntos."}</Text>
                </HStack>
            </VStack>
        </Card>
    )
}

export default ChampionInfoCard
