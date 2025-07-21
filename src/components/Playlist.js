import React from 'react';
import '../styles/Playlist.css';

const Playlist = () => (
  <div className="playlist-page">
    <div className="playlist-header">
      <h1 className="playlist-title">AFTER HOURS TIL DAWN</h1>
      <p className="playlist-sub">SETLIST FOR THE VANCOUVER TOUR STOP</p>
    </div>

    <div className="playlist-wrapper">
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        style={{
          width: '100%',
          maxWidth: '660px',
          overflow: 'hidden',
          background: 'transparent',
          borderRadius: '12px',
          boxShadow: '0 0 30px #B30000'
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/us/playlist/after-hours-til-dawn/pl.u-zPyLLbvFZKDbbjY"
        title="Suhu XO Playlist"
      ></iframe>
    </div>

    <p className="playlist-quote">
      "The pain, the darkness, it's part of the art.” – Abel Tesfaye
    </p>
  </div>
);

export default Playlist;
