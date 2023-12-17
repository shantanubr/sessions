import { Server, ServerOptions } from "socket.io";

const SocketHandler = (req: any, res: any) => {
    if(res.socket.server.io) {
        console.log("socket already running");
    } else {
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            console.log('server is connected');
            socket?.on('join-room', (roomId, userId) => {
                console.log('a new user with', userId);
                socket.join(roomId);
                socket.broadcast.to(roomId).emit('user-connected', userId);
            });
        })
    }
    res.end();
};

export default SocketHandler;
