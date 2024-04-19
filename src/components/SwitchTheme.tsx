import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import textStyles from '../TextStyles';

const SwitchTheme = () => {
    const {toggleColorMode, colorMode} = useColorMode()

    return (
        <HStack>
            <Switch
                isChecked={colorMode === "dark"}
                onChange={toggleColorMode}
                colorScheme='pink'>
            </Switch>
            <Text whiteSpace={"nowrap"} fontStyle={textStyles.textStyles.title} fontSize={"sm"}>
                Dark Mode
            </Text>
        </HStack>
    );
}

export default SwitchTheme;
