import ReactPlayer from "react-player";

interface PlayerProps {
  playerId: string;
  url?: MediaStream;
  muted: boolean;
  playing: boolean;
}

const Player: React.FC<PlayerProps> = ({ playerId, url, muted, playing }) => {
  return (
    <div>
      <ReactPlayer key={playerId} url={url} muted={muted} playing={playing} />
    </div>
  );
};

export default Player;
