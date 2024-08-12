import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

import webpush from 'web-push';
const { WEB_PUSH_PUBLIC_KEY, WEB_PUSH_PRIVATE_KEY } = process.env;

const vapidKeys = {
  publicKey: WEB_PUSH_PUBLIC_KEY,
  privateKey: WEB_PUSH_PRIVATE_KEY
};

webpush.setVapidDetails(
  'mailto:your-email@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// 푸시 알림 전송 함수
function sendPushNotification(subscription: any, payload: any) {
  webpush
    .sendNotification(subscription, JSON.stringify(payload))
    .catch((error) => console.error(error));
}

export const app = express();
export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5000', 'https://bus.hkound.pe.kr'],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log(socket.id, '< Socket ID');

  socket.on('sub', (data) => {
    console.log(data);
    sendPushNotification(JSON.parse(data), {
      title: 'Alert',
      body: 'Push lorem'
    });
  });

  socket.on('test', console.log);
});

export default io;
