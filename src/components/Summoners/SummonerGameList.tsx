import { Button, Card, CardBody, Center, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import MatchCard from '../Matches/MatchCard'
import { summonerAccount } from './useSummoner'
import useGames from '../../hooks/useGames'
import { useContext, useState } from 'react'
import LanguageContext from '../LanguageContext'
import RegionContext from '../RegionContext'
import regionToContinent from '../RegionToContinent'

interface Props {
    summoner: summonerAccount
}

const SummonerGameList = ({ summoner }: Props) => {
    const { region } = useContext(RegionContext);
    const { data: leagueGames, isLoading: isLoadingGames } = useGames(summoner.puuid, regionToContinent(region));
    const [maxGames, setMaxGames] = useState(5);

    const {language} = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "Últimas ",
            " partidas",
            "Mostrar Más",
            "Eso es todo por ahora."
        ],
        "en": [
            "Last ",
            " games",
            "Show More",
            "That's all for now."
        ],
        "fr": [
            "",
            " derniers matchs",
            "Montre Plus",
            "C'est tout pour le moment."
        ]
    };

    if (isLoadingGames) {
        return(
            <Spinner/>
        );
    }
    
    return (
        <Card padding={3} marginBottom={"30px"}>
            {textByLanguage[language][0] + maxGames + textByLanguage[language][1]}
            <CardBody>
                <List spacing={5}>
                {Array.isArray(leagueGames) && leagueGames.map((game, index) => (
                    index < maxGames && (
                        <ListItem key={game}>
                            <MatchCard summoner={summoner} matchId={game} />
                        </ListItem>
                    )
                ))}
                {maxGames < 20 ? (
                    <Center>
                        <Button onClick={() => setMaxGames(maxGames + 5)}>{textByLanguage[language][2]}</Button>
                    </Center>
                ) : (
                    <Center>
                        <Text as={"i"} color={"purple.200"}>{textByLanguage[language][3]}</Text>
                    </Center>
                )}
                </List>
            </CardBody>
        </Card>
    )
}

export default SummonerGameList;
