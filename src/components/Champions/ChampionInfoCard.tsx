import { Card, HStack, VStack, Text } from '@chakra-ui/react'
import ChampionIcon from './ChampionIcon'
import { championBody } from './useChampions';
import { masteryJSON } from './useChampionMastery';
import { useEffect, useState } from 'react';

interface Props {
    champion: championBody;
    mastery: masteryJSON;
}

const ChampionInfoCard = ({ champion, mastery }: Props) => {
    const [mouseHovering, setMouseHovering] = useState(false);
    const [curChampName, setCurChampName] = useState("");
    const numberWithDots = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    useEffect(() => {
        setCurChampName(champion.name);
        if (champion.name.includes("Nunu")) {
            setCurChampName("Nunu");
        }
        if (champion.name.includes("Tahm")) {
            setCurChampName("TahmKench");
        }
        if (champion.name.includes("Fiddle")) {
            setCurChampName("FiddleSticks");
        }
        if (champion.name.includes("Wukong")) {
            setCurChampName("monkeyking");
        }
        if (champion.name.includes("Miss")) {
            setCurChampName("missfortune");
        }
        if (champion.name.includes("Kai")) {
            setCurChampName("kaisa");
        }
    }, [champion]);

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
                <ChampionIcon champion={curChampName} />
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
