import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
    teamPos: string
}

const MapLanes = ({ teamPos }: Props) => {
    const [position, setPosition] = useState("");

    useEffect(() => {
        if (teamPos === "TOP") setPosition("TOP");
        else if (teamPos === "JG") setPosition("JG");
        else if (teamPos === "MIDDLE") setPosition("MID");
        else if (teamPos === "BOTTOM") setPosition("ADC");
        else if (teamPos === "UTILITY") setPosition("SUPP");
    }, [teamPos])

    return (
        <Text>{position}</Text>
    );
}

export default MapLanes
