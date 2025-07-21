// Memories.js
import React from 'react';
import '../styles/Memories.css';

const Memories = () => {
  return (
    <div className="memories-page">
      <div className="memories-content">
        <h1 className="memories-title">AFTER HOURS TOUR — SUHU'S NIGHT TO REMEMBER</h1>
        <p className="memories-sub">July 16, 2025 • Vancouver • Section 217 • Unforgettable</p>

        <div className="photo-grid">
          <img src={`${process.env.PUBLIC_URL}/baddiepose.jpeg`} alt="Suhu at the concert" />
          <img src={`${process.env.PUBLIC_URL}/dancers.jpeg`} alt="The crowd and stage" />
        </div>

        <div className="video-section">
          <video controls src={`${process.env.PUBLIC_URL}/fitcheck.mp4`} />
          <video controls src={`${process.env.PUBLIC_URL}/starboy.mp4`} />
          <video controls src={`${process.env.PUBLIC_URL}/often.mp4`} />
          <video controls src={`${process.env.PUBLIC_URL}/morestage.mp4`} />
          <video controls src={`${process.env.PUBLIC_URL}/stagesetup.mp4`} />
        </div>
      </div>
    </div>
  );
};

export default Memories;
