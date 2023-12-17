import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 } from "uuid";

export default function Home() {
  const router = useRouter();
  const [room, setRoom] = useState("");

  const createAndJoin = () => {
    const roomId = v4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (room) {
      router.push(`/${room}`);
    } else {
      alert("Please provide a valid roomId");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome to sessions!</h1>
      <input
        className="mt-4 text-black"
        value={room}
        onChange={(e) => setRoom(e?.target?.value)}
      />
      <button className="bg-[#eaeaea] text-black mt-4 p-2" onClick={joinRoom}>
        Join Room
      </button>
      <span>--------------------------------</span>
      <button
        className="bg-[#eaeaea] text-black mt-4 p-2"
        onClick={createAndJoin}>
        Create a new room
      </button>
    </div>
  );
}
