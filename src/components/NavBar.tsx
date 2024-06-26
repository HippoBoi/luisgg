import { Box, Button, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import logo from '../assets/images/luchoLogo.jpg';
import SwitchTheme from "./SwitchTheme";
import { useNavigate } from "react-router-dom";
import LanguageList from "./LanguageList";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const NavBar = () => {
    const isScreenSmall = useBreakpointValue({ base: true, lg: false });
    const isEvenSmaller = useBreakpointValue({ sm: true, base: false });
    const navigate = useNavigate();
    const resetPage = () => {
        navigate("/");
    }

    const { language } = useContext(LanguageContext);
    const textByLanguage = {
        "es": [
            "no más monadas"
        ],
        "en": [
            "no more throwing"
        ],
        "fr": [
            "pas de conneries"
        ]
    };

    return (
        <Box position={"relative"} padding={2}>
            <Box position={"absolute"} left={"1%"}>
                <HStack spacing={-1}>
                    <Button 
                        bgImage={logo} 
                        style={textStyles.textStyles.title} 
                        fontSize={"2xl"} 
                        onClick={resetPage}>
                        Luis.GG
                    </Button>
                    {isEvenSmaller && (
                        <Image src={logo} boxSize={"60px"}></Image>
                    )}
                </HStack>
            </Box>

            {!isScreenSmall && (
                <Box position={"absolute"} left={"50%"} transform="translateX(-50%)">
                    <Text 
                        borderBottom={"1px solid"}
                        whiteSpace={"nowrap"}
                        style={textStyles.textStyles.title} 
                        color={"purple.200"} 
                        as={"i"}
                        fontSize={"45px"}>
                        {textByLanguage[language][0]}
                    </Text>
                </Box>
            )}
            
            <Box position={"absolute"} right={isEvenSmaller ? "12%" : "30%"} marginTop={"5px"}>
                <LanguageList />
            </Box>

            <Box position={"absolute"} right={"1%"} marginTop={"20px"}>
                <SwitchTheme></SwitchTheme>
            </Box>
        </Box>
    );
}

export default NavBar
