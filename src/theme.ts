import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
};

const colorTheme = extendTheme({ config });

export default colorTheme;