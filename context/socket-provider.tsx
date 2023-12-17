import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { SocketContext } from "./socket";

export const SocketProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    const connection = io();
    console.log(connection);
    setSocket(connection);
  }, []);

  socket?.on("connect_error", async (err) => {
    console.log("Error est socket");
    await fetch("/api/socket");
  });

  return (
    // @ts-ignore
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
