import React, { useRef } from 'react';
import '../styles/LoveLetter.css';

const LoveLetter = () => {
  const audioRef = useRef(null);

  return (
    <div className="love-page">
      <h1 className="love-title">TRACK 9 — LOVE LETTER</h1>
      <p className="love-sub">Unreleased. Just for Suhu.</p>

      <audio ref={audioRef} src="/loveletter.mp3" loop />

      <div className="letter-box">
        <p>
  I love you so much.
  <br /><br />
  I hope you had the best time at the concert. I know you were screaming your heart out and losing your mind the second that intro hit. Abel was on stage, but you were the real main character.
  <br /><br />
  You’ve always been my stargirl. No one eats up a Weeknd concert like you. You looked insane. I already know your voice is gone, your camera roll is full, and your soul left your body during DIE FOR YOU. As it should.
  <br /><br />
  I wish I could’ve been there with you, but I still felt like I was part of it just seeing how hyped you were. You deserve moments like that. Loud ones. Special ones.
  <br /><br />
  This whole site is dramatic as hell but you know I had to do something extra. Just a little way to say I love you, I’m proud of you, and you’ll always be worth the front row.
  <br /><br />
  – Your Jayu. Forever Yours.
</p>

      </div>
    </div>
  );
};

export default LoveLetter;
