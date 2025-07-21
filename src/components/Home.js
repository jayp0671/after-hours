// Home.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/afterhours.mp3';

const Home = () => {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null); // <-- added

  const handleStart = () => {
    setStarted(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 10;
      videoRef.current.play();
    }

    // Start audio at 130s
    if (audioRef.current) {
      audioRef.current.currentTime = 132.5;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (started && videoRef.current) {
      videoRef.current.muted = false;
    }
  }, [started]);

  return (
    <div className="home-container">
      {/* HEADER */}
      <div className="header-bar">
        <h1 className="logo">SUHU ✦ XO</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/memories">Memories</Link>
          <Link to="/playlist">Playlist</Link>
          <Link to="/love-letter">Love Letter</Link>
        </nav>
      </div>

      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/afterhours.mp3`} loop />

      {/* START OVERLAY */}
      {!started && (
        <div className="start-overlay">
          <button className="start-button" onClick={handleStart}>
            XO TILL WE OVERDOSE
          </button>
        </div>
      )}

      {/* HERO TEXT */}
      {started && (
        <div className="hero">
          <h1 className="hero-title">Suhu’s After Hours</h1>
          <p className="hero-subtitle">
            My Baby's First Concert – A Night She'll Never Forget.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
