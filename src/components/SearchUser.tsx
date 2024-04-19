import { HStack, Input, Text, VStack } from "@chakra-ui/react";
import textStyles from "../TextStyles";

const SearchUser = () => {
    return (
        <VStack>
            <Text style={textStyles.textStyles.title} as={"i"}>
                    Buscar por Riot ID:
            </Text>

            <HStack spacing={"20px"} height={"60px"} justifyContent={"space-between"}>
                <Text marginLeft={"20px"} style={textStyles.textStyles.title} as={"i"}>
                    Nombre:
                </Text>

                <Input 
                variant={"filled"} 
                placeholder='"Shugoshin..."' />


                <Text marginLeft={"40px"} style={textStyles.textStyles.title} as={"i"}>
                    TAG:
                </Text>

                <Input 
                marginRight={"60px"}
                variant={"filled"} 
                placeholder='"KHNS..."' />
            </HStack>
        </VStack>
    );
};

export default SearchUser;
