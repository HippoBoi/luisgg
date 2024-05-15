import { Text } from "@chakra-ui/react"

interface Props {
    marginTop?: number;
}

const LegalBoilerplate = ({ marginTop = 60 }: Props) => {
    return (
        <Text color={"purple.300"} fontSize={"15px"} marginTop={`${marginTop}px`} marginX={"100px"}>
            Luis.GG isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot 
            Games or anyone officially involved in producing or managing Riot Games properties. Riot 
            Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
        </Text>
    );
};

export default LegalBoilerplate;
