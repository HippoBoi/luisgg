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
        colors: {
            teal: {
              50: "#E6FFFA",
              100: "#B2F5EA",
              200: "#81E6D9",
              300: "#4FD1C5",
              400: "#38B2AC",
              500: "#319795",
              600: "#2C7A7B",
              700: "#285E61",
              800: "#234E52",
              900: "#1D4044",
            },
        },
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