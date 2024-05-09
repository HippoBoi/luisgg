import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import exampleImage from "../assets/images/example.png"
import { useState } from "react";
// Busca un invocador de cualquier región introduciendo su nombre de invocador y Riot ID.
function DefaultPage() {
    const [showInfo, setShowInfo] = useState(false);

    return(
        <Center marginY={"70px"}>
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
                _hover={{ color: "purple.600" }}
                onClick={() => setShowInfo(!showInfo)}>
                ¿Qué es una cuenta Riot ID?
            </Text>
            {showInfo && (
                <>
                <VStack marginTop={"50px"}>
                    <Box position={"relative"} boxSize={"70%"}>
                        <Text marginBottom={"20px"} fontWeight={"bold"} fontSize={"15px"} color={"red.200"}>Las cuentas de LoL pasaron a ser cuentas de Riot que se manejan con Riot ID</Text>
                        <Text as={"i"} fontSize={"20px"} color={"red.400"}>Riot ID cuenta con un nombre de usuario y un TAG.</Text>
                        <Box position={"absolute"} left={"50%"} transform={"translateX(-50%)"}>
                            <Image marginTop={"20px"} src={exampleImage}></Image>
                        </Box>
                    </Box>
                    <Text marginTop={"250px"} fontWeight={"bold"} fontSize={"15px"} color={"yellow.300"}>Puedes encontrar (y copiar) la tuya en tu perfil de invocador</Text>
                </VStack>
                </>
            )}
            </VStack>
        </Center>
    );
}

export default DefaultPage;