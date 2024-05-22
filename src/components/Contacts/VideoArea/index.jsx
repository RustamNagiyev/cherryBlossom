import React, { useState } from "react";
import "./index.css";
import PlayButton from "../../../images/Contacts/play.svg";

export default function VideoArea() {
    const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="watch">
      <h2 className="header-com">HOW TO GET TO US?</h2>
      <div className="video-area">
        <div
          className="video-box"
          onClick={() => {
            setShowVideo(true);
          }}
        >
          <img className="play-btn" src={PlayButton} alt="play button" />
        </div>
      </div>
      <div
        className="iframe-video-wrapper"
        style={{
          visibility: `${showVideo ? "visible" : "hidden"}`,
          transform: `${showVideo ? "scale(1)" : "scale(0)"}`,
        }}
      >
        <span
          onClick={() => {
            setShowVideo(false);
          }}
        >
          X
        </span>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fyqttjeM8Ps?si=EldOjeS3fDAxMf2q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>
  );
}
