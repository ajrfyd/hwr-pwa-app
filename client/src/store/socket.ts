import { Socket, io } from 'socket.io-client';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const { VITE_API_ENDPOINT } = import.meta.env;

let globalSocket: Socket | null = null;

type SocketState = {
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  emit: (event: string, data: any) => void;
  on: (event: string, cb: (data: any) => void) => void;
};

const createSocket = () => {
  if (!globalSocket) {
    globalSocket = io(VITE_API_ENDPOINT.slice(0, -4), {
      transports: ['websocket'],
      withCredentials: true
    });
  }
  return globalSocket;
};

const socketStore = create<SocketState>()(
  devtools(
    persist(
      (set, _) => ({
        isConnected: false,
        connect: () => {
          const socket = createSocket();

          socket.on('connect', () => {
            set({ isConnected: true });
            console.log(socket.id);
          });
          socket.on('disconnect', () => set({ isConnected: false }));
        },
        disconnect: () => {
          if (globalSocket) {
            globalSocket.disconnect();
            globalSocket = null;
            set({ isConnected: false });
          }
        },
        emit: (event, data) => {
          if (globalSocket) {
            globalSocket.emit(event, data);
          } else {
            console.error('scoket is not connected');
          }
        },
        on: (event, cb) => {
          if (globalSocket) {
            globalSocket.on(event, cb);
          } else {
            console.error('Scoket is not connected');
          }
        }
      }),
      {
        name: 'socketStore',
        partialize: (state) => ({ isConnected: state.isConnected })
      }
    )
  )
);

export default socketStore;
