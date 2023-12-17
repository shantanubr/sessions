import { useContext } from "react";
import { createContext } from "react";

export const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
