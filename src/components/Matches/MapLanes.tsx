import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
    teamPos: string;
    accent?: "b" | "i"
    color?: string;
    size?: string;
}

const MapLanes = ({ teamPos, accent = "i", color = "", size = "20px" }: Props) => {
    const [position, setPosition] = useState("");

    useEffect(() => {
        if (teamPos === "TOP") setPosition("TOP");
        else if (teamPos === "JUNGLE") setPosition("JUNGLE");
        else if (teamPos === "MIDDLE") setPosition("MID");
        else if (teamPos === "BOTTOM") setPosition("ADC");
        else if (teamPos === "UTILITY") setPosition("SUPPORT");
    }, [teamPos])

    return (
        <Text fontSize={size} as={accent} color={color}>{position}</Text>
    );
}

export default MapLanes
