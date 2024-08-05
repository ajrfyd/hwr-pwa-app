import express from 'express';
import { app, server } from './socket/socket.js';
import './lib/config/index.js';
import cors from 'cors';
import path from 'path';
import { __dirname } from './lib/utils/index.js';
import spotRouter from './routes/spot.route.js';

// const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'build')));

const { PORT } = process.env;

app.use(
  cors({
    origin: ['http://localhost:5000', 'https://bus.hkound.pe.kr'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
  })
);

app.use('/api', spotRouter);

app.get('/', (req, res) => {
  res.status(200).send('index.html');
});

server.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});
