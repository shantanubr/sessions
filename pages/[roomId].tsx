import Player from "@/components/player";
import useMediaStream from "../hooks/useMediaStream";
import usePeer from "../hooks/usePeer";
import { useSocket } from "@/context/socket";

const Room = () => {
  const socket = useSocket();
  const { peer, peerId } = usePeer();
  const { stream } = useMediaStream();

  return (
    <div>
      <div>
        <Player playerId={peerId} url={stream} muted={true} playing={true} />
      </div>
    </div>
  );
};

export default Room;
