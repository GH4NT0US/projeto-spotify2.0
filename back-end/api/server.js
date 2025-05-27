import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

// Habilita CORS para permitir requisições de outros domínios
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

// Rota para buscar todos os artistas
app.get('/artists', async (req, res) => {
    try {
        const artists = await db.collection('artists').find({}).toArray();
        res.send(artists);
    } catch (error) {
        console.error('Erro ao buscar artistas:', error);
        res.status(500).send({ error: 'Erro ao buscar artistas' });
    }
});

// Rota para buscar todas as músicas
app.get('/songs', async (req, res) => {
    try {
        const songs = await db.collection('songs').find({}).toArray();
        res.send(songs);
    } catch (error) {
        console.error('Erro ao buscar músicas:', error);
        res.status(500).send({ error: 'Erro ao buscar músicas' });
    }
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
