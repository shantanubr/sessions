import { cloneDeep } from "lodash";
import { useState } from "react";

const usePlayer = () => {
  const [players, setPlayers] = useState({});
  const newPlayer = cloneDeep(players);
  return {
    players,
    setPlayers,
  };
};

export default usePlayer;
