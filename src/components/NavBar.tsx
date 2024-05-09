import { Button, HStack, Image, Text } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import logo from '../assets/images/luchoLogo.jpg';
import SwitchTheme from "./SwitchTheme";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const resetPage = () => {
        navigate("/");
    }

    return (
        <HStack padding={5} marginBottom={"40px"} justifyContent={"space-between"}>
            <HStack spacing={-1}>
                <Button 
                    bgImage={logo} 
                    style={textStyles.textStyles.title} 
                    fontSize={"2xl"} 
                    onClick={resetPage}>
                    Luis.GG
                </Button>
                <Image src={logo} boxSize={"60px"}></Image>
            </HStack>

            <Text 
                marginRight={"60px"} 
                marginBottom={"10px"}
                borderBottom={"1px solid"}
                whiteSpace={"nowrap"}
                style={textStyles.textStyles.title} 
                color={"purple.200"} 
                as={"i"}
                fontSize={"45px"}>
                no más monadas
            </Text>
            
            <SwitchTheme></SwitchTheme>
        </HStack>
    );
}

export default NavBar
