import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
    teamPos: string;
    accent?: "b" | "i"
    color?: string;
}

const MapLanes = ({ teamPos, accent = "i", color = "" }: Props) => {
    const [position, setPosition] = useState("");

    useEffect(() => {
        if (teamPos === "TOP") setPosition("TOP");
        else if (teamPos === "JUNGLE") setPosition("JUNGLE");
        else if (teamPos === "MIDDLE") setPosition("MID");
        else if (teamPos === "BOTTOM") setPosition("ADC");
        else if (teamPos === "UTILITY") setPosition("SUPPORT");
    }, [teamPos])

    return (
        <Text as={accent} color={color}>{position}</Text>
    );
}

export default MapLanes
