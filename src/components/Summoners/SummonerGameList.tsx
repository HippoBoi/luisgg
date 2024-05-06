import { Card, CardBody, List, ListItem, Spinner } from '@chakra-ui/react'
import MatchCard from '../MatchHistory/MatchCard'
import { summonerAccount } from './useSummoner'
import useGames from '../../hooks/useGames'
import { useState } from 'react'

interface Props {
    summoner: summonerAccount
}

const SummonerGameList = ({ summoner }: Props) => {
    const { data: leagueGames, isLoading: isLoadingGames } = useGames(summoner.puuid);
    const [maxGames] = useState(5);

    if (isLoadingGames) {
        return(
            <Spinner/>
        );
    }
    
    return (
        <Card padding={3}>
            {"Últimas " + maxGames + " partidas"}
            <CardBody>
                <List spacing={5}>
                {Array.isArray(leagueGames) && leagueGames.map((game, index) => (
                    index < maxGames && (
                        <ListItem key={game}>
                            <MatchCard summoner={summoner} matchId={game} />
                        </ListItem>
                    )
                ))}
                </List>
            </CardBody>
        </Card>
    )
}

export default SummonerGameList;
