import { useRef, useState } from "react";
import './mymusic.css'

export default function MusicPlayer() {
  const audioRef = useRef(new Audio("/music/sakhi.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <button onClick={toggleMusic} className="music-btn">
      {playing ? "⏸ Pause " : "▶ Play "}
    </button>
  );
}