import Player from "@/components/player";
import useMediaStream from "../hooks/useMediaStream";
import usePeer from "../hooks/usePeer";
import { useEffect } from "react";
import { useSocket } from "@/context/socket";
import usePlayer from "@/hooks/usePlayer";

const Room = () => {
  const socket = useSocket();
  const { peer, peerId } = usePeer();
  const { stream } = useMediaStream();
  const { players, setPlayers } = usePlayer();

  useEffect(() => {
    if (!socket || !peer || !stream) return;
    const handleUserConnected = (newUser: any) => {
      console.log("user connected in room with user id", newUser);

      const call = peer?.call(newUser, stream!);
      call?.on("stream", (incomingStream) => {
        console.log("Incoming stream from someone, ");
        // @ts-ignore
        setPlayers((prev) => ({
          ...prev,
          [newUser]: {
            url: incomingStream,
            muted: false,
            playing: true,
          },
        }));
      });
    };
    // @ts-ignore
    socket?.on("user-connected", handleUserConnected);

    return () => {
      // @ts-ignore
      socket?.off("user-connected", handleUserConnected);
    };
  }, [socket, peer, stream, setPlayers]);

  useEffect(() => {
    if (!peer || !stream) return;
    peer.on("call", (call) => {
      const { peer: callerId } = call;
      call.answer(stream);
      call.on("stream", (incomingStream) => {
        console.log("Incoming stream from someone, ", callerId);
        setPlayers((prev) => ({
          ...prev,
          [callerId]: {
            url: incomingStream,
            muted: false,
            playing: true,
          },
        }));
      });
    });
  }, [peer, stream, setPlayers]);

  useEffect(() => {
    if (!stream || !peerId) return;
    console.log("setting my stream", peerId);
    setPlayers((prev) => ({
      ...prev,
      [peerId]: {
        url: stream,
        muted: false,
        playing: true,
      },
    }));
  }, [peerId, setPlayers, stream]);

  return (
    <div>
      {Object.keys(players).map((playerId) => {
        // @ts-ignore
        const { url, muted, playing } = players[playerId];
        return (
          <Player key={playerId} url={url} muted={muted} playing={playing} />
        );
      })}
      <div></div>
    </div>
  );
};

export default Room;
