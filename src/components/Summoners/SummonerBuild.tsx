import { Grid, GridItem } from '@chakra-ui/react';
import ItemIcon from '../ItemIcon';
import { participantInfo } from '../Matches/useMatch';

interface Props {
    player: participantInfo;
}

const SummonerBuild = ({ player }: Props) => {
    return (
        <Grid templateColumns={"repeat(3, 1fr)"} gap={"2px"}>
            <GridItem>
                <ItemIcon itemId={player.item0}></ItemIcon>
            </GridItem>
            <GridItem>
                <ItemIcon itemId={player.item1}></ItemIcon>
            </GridItem>
            <GridItem>
                <ItemIcon itemId={player.item2}></ItemIcon>
            </GridItem>
            <GridItem>
                <ItemIcon itemId={player.item3}></ItemIcon>
            </GridItem>
            <GridItem>
                <ItemIcon itemId={player.item4}></ItemIcon>
            </GridItem>
            <GridItem>
                <ItemIcon itemId={player.item5}></ItemIcon>
            </GridItem>
        </Grid>
    );
}

export default SummonerBuild
