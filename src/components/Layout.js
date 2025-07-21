// src/components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Home.css';

const Layout = () => {
  return (
    <>
      <div className="header-bar">
        <h1 className="logo">SUHU ✦ XO</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/memories">Memories</Link>
          <Link to="/playlist">Playlist</Link>
          <Link to="/love-letter">Love Letter</Link>
        </nav>
      </div>

      {/* Don't wrap with .home-container here — it's ONLY for the video home layout */}
      <Outlet />
    </>
  );
};

export default Layout;
