import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import exampleImage from "../assets/images/example.png"
import { useContext, useState } from "react";
import LanguageContext from "../components/LanguageContext";

function DefaultPage() {
    const [showInfo, setShowInfo] = useState(false);
    const { language } = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "Encuentra a cualquier invocador con una cuenta de Riot ID.",
            "Ejemplo:",
            "¿Qué es una cuenta Riot ID?",
            "Las cuentas de LoL pasaron a ser cuentas de Riot que se manejan con Riot ID",
            "Riot ID cuenta con un nombre de usuario y un TAG.",
            "Puedes encontrar (y copiar) la tuya en tu perfil de invocador."
        ],
        "en": [
            "Find any summoner with a Riot ID account.",
            "Example:",
            "What is a Riot ID account?",
            "LoL accounts now are Riot accounts that use Riot ID.",
            "Riot ID contains username and TAG.",
            "You can find (and copy) yours in your profile."
        ],
        "fr": [
            "Trouver n'importe quel invocateur avec un compte Riot ID.",
            "Exemple:",
            "Qu'est-ce qu'un compte Riot ID ?",
            "Les comptes LoL sont désormais des comptes Riot qui utilisent l'identifiant Riot.",
            "Riot ID contient le nom d'utilisateur et le TAG.",
            "Vous pouvez trouver (et copier) le vôtre dans votre profil."
        ]
    };

    return(
        <Center marginY={"70px"}>
            <VStack>
            <Text as={"b"} fontSize={"2xl"} color={"purple.500"}> 
                {textByLanguage[language][0]}
            </Text>
            <HStack marginBottom={"20px"}>
            <Text as={"b"} fontSize={"2xl"} color={"pink.700"}> 
                {textByLanguage[language][1]}
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
                {textByLanguage[language][2]}
            </Text>
            {showInfo && (
                <>
                <VStack marginTop={"50px"}>
                    <Box position={"relative"} boxSize={"70%"}>
                        <Text marginBottom={"20px"} fontWeight={"bold"} fontSize={"15px"} color={"red.200"}>{textByLanguage[language][3]}</Text>
                        <Text as={"i"} fontSize={"20px"} color={"red.400"}>{textByLanguage[language][4]}</Text>
                        <Box position={"absolute"} left={"50%"} transform={"translateX(-50%)"}>
                            <Image marginTop={"20px"} src={exampleImage}></Image>
                        </Box>
                    </Box>
                    <Text marginTop={"250px"} fontWeight={"bold"} fontSize={"15px"} color={"yellow.300"}>{textByLanguage[language][5]}</Text>
                </VStack>
                </>
            )}
            </VStack>
        </Center>
    );
}

export default DefaultPage;