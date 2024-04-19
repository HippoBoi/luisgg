import { Text } from '@chakra-ui/react';
import useSummoners from '../hooks/useSummoner';

const GridTest = () => {
    const {summoner, error} = useSummoners();

    if (error) return(<Text>{error}</Text>);

    return (
        <Text as={"b"} fontSize={"2xl"}> 
            summoner name: {summoner.gameName}
        </Text>
    );
}

export default GridTest;
