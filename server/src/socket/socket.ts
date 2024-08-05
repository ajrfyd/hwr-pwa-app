import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

export const app = express();
export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5000', 'https://bus.hkound.pe.kr'],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log(socket);
});

export default io;
