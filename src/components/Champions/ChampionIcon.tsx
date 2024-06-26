import { Image } from "@chakra-ui/react"

interface Props {
    champion: string,
    border?: "full" | "medium" | "empty",
    size?: number,
    skin?: number
}

const ChampionIcon = ({ champion, border = "full", size = 50, skin = 0 }: Props) => {
    const extension = ".jpg";
    const championIcon = `https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion}_${skin}${extension}`;
    return (
        <Image src={championIcon} boxSize={`${size}px`} borderRadius={border === "full" ? "full" : border === "medium" ? "20px" : 0} />
    )
}

export default ChampionIcon
