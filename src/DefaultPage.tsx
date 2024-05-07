import { Center, HStack, Text, VStack } from "@chakra-ui/react";
// Busca un invocador de cualquier región introduciendo su nombre de invocador y Riot ID.
function DefaultPage() {
    return(
        <Center marginY={"100px"}>
            <VStack>
            <Text as={"b"} fontSize={"2xl"} color={"purple.500"}> 
                Encuentra a cualquier invocador con una cuenta de Riot.
            </Text>
            <HStack marginBottom={"20px"}>
            <Text as={"b"} fontSize={"2xl"} color={"pink.700"}> 
                Ejemplo:
            </Text> 
            <Text as={"b"} fontSize={"2xl"} color={"pink.500"}>
            KHN Clean, 
            </Text>
            <Text as={"b"} fontSize={"2xl"} color={"red.400"}>
                KHN
            </Text>
            </HStack>
            <Text 
                as={"button"}
                textDecoration="underline" 
                _hover={{ color: "purple.600" }}>
                ¿Qué es una cuenta Riot ID?
            </Text>
            </VStack>
        </Center>
    );
}

export default DefaultPage;