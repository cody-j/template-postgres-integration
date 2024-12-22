import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => {
    res.statusCode = 200; 
    res.json('ok');
    return 
});

export default app;
