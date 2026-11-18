import express from 'express';
import process from 'node:process';
import healthRouter from './health';

const app = express();
const defaultPort = 3000;
const port = Number(process.env['PORT'] ?? defaultPort);

app.use(express.json());
app.use('/api/health', healthRouter);
app.listen(port);
