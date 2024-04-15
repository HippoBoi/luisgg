import { Button, HStack, Image } from "@chakra-ui/react";
import textStyles from "../TextStyles";
import logo from '../assets/images/luchoLogo.jpg';
import SwitchTheme from "./SwitchTheme";

const NavBar = () => {
    return (
        <HStack padding={5} justifyContent={"space-between"}>
            <HStack spacing={-1}>
                <Button bgImage={logo} style={textStyles.textStyles.title} fontSize={"2xl"} >
                    Luis.GG
                </Button>
                <Image src={logo} boxSize={"60px"}></Image>
            </HStack>
            
            <SwitchTheme></SwitchTheme>
        </HStack>
    );
}

export default NavBar
