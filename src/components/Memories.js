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
          <img src="/baddiepose.JPEG" alt="Suhu at the concert" />
          <img src="/dancers.JPEG" alt="The crowd and stage" />
        </div>

        <div className="video-section">
          <video controls src="/fitcheck.MP4" />
          <video controls src="/starboy.MP4" />
          <video controls src="/often.MP4" />
          <video controls src="/morestage.MP4" />
          <video controls src="/stagesetup.MP4" />
        </div>
      </div>
    </div>
  );
};

export default Memories;
