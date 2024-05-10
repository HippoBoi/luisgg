import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import http from 'http'
import { fileURLToPath } from 'url'; // Necesario para obtener la ruta del archivo

const __filename = fileURLToPath(import.meta.url); // Obtener el nombre del archivo actual
const __dirname = path.dirname(__filename); // Obtener el directorio del archivo actual

const app = express();
const port = process.env.port || 3000;
const server = http.createServer(app);
const apiKey = process.env.apiKey;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// server static fields
app.use(express.static(path.join(__dirname, 'src')));

// route handler for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// route handler for the riot api proxy
app.get('/riot/*', async (req, res) => {
    const parts = req.params[0].split('/');
    const region = parts[0];
    const endpoint = parts.slice(1).join('/');
    
    const riotUrl = `https://${region}.api.riotgames.com/${endpoint}`;

    try {
        const response = await fetch(`${riotUrl}?api_key=${apiKey}`);
        const data = await response.json();
        
        res.json(data);
    } catch (error) {
        console.error("Error fetching data from Riot API:", error);

        res.status(500).json({ error: "Internal Server Error" });
    }
});

// old riot route
app.get('/riotOld/*', async (req, res) => {
    const parts = req.params[0].split('/');
    const region = parts[0];
    const endpoint = parts.slice(1).join('/');
    const riotUrl = `https://${region}.api.riotgames.com/${endpoint}`;
    
    try {
        const response = await fetch(`${riotUrl}?api_key=${apiKey}`);
        const data = await response.json();
        
        res.json(data);
    } catch (error) {
        console.error("Error fetching data from Riot API:", error);

        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => { // http://localhost:
    console.log(`Proxy Server running on: ${port}`);
});
