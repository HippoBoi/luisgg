import { Text } from '@chakra-ui/react'
import { useState } from 'react';

interface Props {
    lane: string,
    role: string
}

const MapLanes = ({ lane, role }: Props) => {
    const [position, setPosition] = useState("Undefined");

    if (role === "SOLO") {
        if (lane === "TOP") { setPosition("Top"); }
        if (lane === "MID") { setPosition("Mid"); }
    }
    else if (role === "CARRY") {
        setPosition("Adc");
    }
    else if (role === "SUPPORT") {
        setPosition("Supp");
    }
    else if (role === "NONE" && lane === "JUNGLE") {
        setPosition("Jungle");
    }
    else {
        setPosition("Undefined");
    }

    return (
        <Text>
            {position}
        </Text>
    );
}

export default MapLanes
