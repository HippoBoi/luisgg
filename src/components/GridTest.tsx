import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface summonerBody {
    id: string,
    accountId: string,
    puuid: string,
    profileIconId: number,
    revisionDate: number,
    summonerLevel: number
};

const GridTest = () => {
    const [summoner, setSummoner] = useState<summonerBody>({} as summonerBody);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get<summonerBody>("/summoner/v4/summoners/by-name/KHN%20Hippo")
            .then((res) => {
                setSummoner(res.data);
            })
            .catch((err) => {
                setError(err);
            })
    }, []);

    if (error) return <Text>{error}</Text>

    return (
        <Text as={"b"} fontSize={"2xl"}> 
            summoner level: {summoner.summonerLevel} 
        </Text>
    );
}

export default GridTest;
