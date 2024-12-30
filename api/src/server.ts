import express from 'express';
import cors from 'cors';
import { increment } from './database';

const app = express();

app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => {
    res.statusCode = 200; 
    res.json('ok');
    return;
});

app.post('/increment/:id', async (req, res) => {
    const counter = await increment(req.params.id);
    res.status(200).json(counter);
    return;
});

export default app;
