import { Image } from "@chakra-ui/react"

interface Props {
    champion: string,
    size?: number,
    skin?: number
}

const ChampionIcon = ({ champion, size = 50, skin = 0 }: Props) => {
    const extension = ".jpg";
    const championIcon = `https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion}_${skin}${extension}`;
    return (
        <Image src={championIcon} boxSize={`${size}px`} borderRadius={"full"} />
    )
}

export default ChampionIcon
