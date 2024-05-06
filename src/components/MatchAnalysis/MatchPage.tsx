import { HStack, Text } from '@chakra-ui/react'
import textStyles from '../../TextStyles'
import { useParams } from 'react-router-dom'

const MatchPage = () => {
    const params = useParams();

    return (
        <HStack justifyContent={"space-between"}>
            <Text>Página del match</Text>
            <Text style={textStyles.textStyles.title}>
                {"Investigando a " + params.gameName}
            </Text>
        </HStack>
    )
}

export default MatchPage
