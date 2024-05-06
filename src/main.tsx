import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import colorTheme from './theme.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={colorTheme}>
                <ColorModeScript initialColorMode={colorTheme.config.initialColorMode} />
                <RouterProvider router={router} /> 
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
