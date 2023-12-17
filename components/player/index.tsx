import ReactPlayer from "react-player";

interface PlayerProps {
  url?: MediaStream;
  muted: boolean;
  playing: boolean;
}

const Player: React.FC<PlayerProps> = ({ url, muted, playing }) => {
  return (
    <div>
      <ReactPlayer url={url} muted={muted} playing={playing} />
    </div>
  );
};

export default Player;
