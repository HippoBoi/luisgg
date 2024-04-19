import { Text } from '@chakra-ui/react';
import useSummoners from '../hooks/useSummoner';

interface Props {
    summonerId: string
}

const GridTest = ({ summonerId }: Props) => {
    const {summoner, error} = useSummoners(summonerId); // parametros: (id)

    if (error) return(<Text>{error}</Text>);

    return (
        <Text as={"b"} fontSize={"2xl"}> 
            summoner name: {summoner.gameName}
        </Text>
    );
}

export default GridTest;
