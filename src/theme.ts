import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
};

const colorTheme = extendTheme({ 
    config,
    colors : {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray:
        {
          50: '#f1ecfb',
          100: '#d3c9e8',
          200: '#b7a7d7',
          300: '#9d83c7',
          400: '#835fb6',
          500: '#6c479d',
          600: '#57367a',
          700: '#402757',
          800: '#271736',
          900: '#0e0716',
        }
    }
});

export default colorTheme;