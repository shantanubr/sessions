import { Server, ServerOptions } from "socket.io";

const SocketHandler = (req, res) => {
    if(res.socket.server.io) {
        console.log("socket already running");
    } else {
        const io = new Server(res.socket.server);
        res.socket.server.io = io;

        io.on('connection', (socket) => {
            console.log('server is connected');
        })
    }
    res.end();
};

export default SocketHandler;
