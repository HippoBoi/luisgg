import { HStack, Text } from '@chakra-ui/react'
import textStyles from '../../TextStyles'
import { useParams } from 'react-router-dom'

const MatchPage = () => {
    const params = useParams();

    return (
        <HStack justifyContent={"space-between"} marginTop={"10px"}>
            <Text>data data data data</Text>
            <Text>Página del match</Text>
            <Text style={textStyles.textStyles.title}>
                {"Investigando a " + params.matchId}
            </Text>
        </HStack>
    )
}

export default MatchPage
