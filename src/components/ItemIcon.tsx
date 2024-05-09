import { Image } from '@chakra-ui/react';

interface Props {
    itemId: number;
    size?: string;
    patch?: string;
    extension?: string;
}

const ItemIcon = ({ itemId, size = "20px", patch = "14.9.1", extension = ".png" }: Props) => {
    if (itemId === 0) {
        return(<Image></Image>)
    }
    return (
        <Image 
            objectFit={"cover"}
            boxSize={size}
            src={`https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${itemId}${extension}`} />
    );
}

export default ItemIcon
