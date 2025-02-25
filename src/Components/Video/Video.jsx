import React, { useRef } from "react";
import "./Video.css";
import video from "../../assets/video.mp4";

const Video = ({ playerState, setPlayerState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayerState(false);
    }
  };
  return (
    <div
      className={`video-player ${playerState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default Video;
