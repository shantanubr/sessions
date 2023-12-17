import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { Socket, io } from "socket.io-client";


export const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
};

