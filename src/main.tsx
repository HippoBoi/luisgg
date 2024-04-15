import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import colorTheme from './theme.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={colorTheme}>
            <ColorModeScript initialColorMode={colorTheme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
