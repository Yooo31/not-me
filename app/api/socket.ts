import { Server, Socket } from 'socket.io';

export const initSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log(`Socket connected: ${socket.id}`);

    socket.on('createRoom', (roomId: string, username: string) => {
      socket.join(roomId);
      io.to(roomId).emit('playerJoined', { username, playerId: socket.id });

      io.to(roomId).emit('setMaster', { username, playerId: socket.id });
    });
  });
};
