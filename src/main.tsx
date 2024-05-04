import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import colorTheme from './theme.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={colorTheme}>
                <ColorModeScript initialColorMode={colorTheme.config.initialColorMode} />
                <App />
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
