import React, { useState } from 'react';
import Navbar from './Navbar';
import './Audiobook.css';

const audioBooks = [
  {
    id: 0,
    title: 'Fullness of an Empty Life',
    img: 'https://m.media-amazon.com/images/I/51MDTfE6MXL.jpg',
    url: 'https://ia800704.us.archive.org/1/items/short_poetry_099_librivox/waythroughthewoods_kipling_pjw_64kb.mp3',
  },
  {
    id: 1,
    title: 'The Eyes Have It',
    img: 'https://m.media-amazon.com/images/I/61cHYYzklXL.AC_UF1000,1000_QL80.jpg',
    url: 'https://ia601605.us.archive.org/33/items/theeyes_haveit_pc_librivox/theeyeshaveit_1_dick_64kb.mp3',
  },
  {
    id: 2,
    title: 'Even In Darkness',
    img: 'https://m.media-amazon.com/images/I/41mJxSmFT6L.jpg',
    url: 'https://downloads.bbc.co.uk/arts/romantics/audio/mp3/byron_darkness.mp3',
  },
  {
    id: 3,
    title: 'Soul',
    img: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
    url: 'http://download.guardian.co.uk/audio/kip/books/series/short-stories-podcast/1355324330144/8084/gdn.book.121221.tm.Sebastian-Barry-James-Joyce-short-story.mp3',
  },
  {
    id: 4,
    title: 'The Lone Mystery',
    img: 'https://m.media-amazon.com/images/I/41Jjh5Cij9L.jpg',
    url: 'https://ia800301.us.archive.org/29/items/short_scifi_039_1008_librivox/beyondlieswub_dick_sr_64kb.mp3',
  },
];

const Audiobook = () => {
  const [audioStates, setAudioStates] = useState(
    audioBooks.map(() => ({ audio: null, playing: false }))
  );

  const playAudio = (index, audioUrl) => {
    const newStates = [...audioStates];

    // Pause all others
    newStates.forEach((state, i) => {
      if (i !== index && state.audio && state.playing) {
        state.audio.pause();
        newStates[i] = { ...state, playing: false };
      }
    });

    if (newStates[index].playing && newStates[index].audio) {
      newStates[index].audio.pause();
      newStates[index] = { ...newStates[index], playing: false };
    } else {
      let audio = newStates[index].audio;
      if (!audio) {
        audio = new Audio(audioUrl);
        audio.onended = () => {
          setAudioStates((prev) => {
            const s = [...prev];
            s[index] = { ...s[index], playing: false };
            return s;
          });
        };
      }
      audio.play().catch(() => alert('Audio file unavailable. Please try another.'));
      newStates[index] = { audio, playing: true };
    }

    setAudioStates(newStates);
  };

  return (
    <div className="audio-wrapper">
      <Navbar />
      <div className="audio-page-header">
        <h2>AudioBooks</h2>
        <p>Listen to expert narrators bring stories to life</p>
      </div>
      <div className="cad-container">
        {audioBooks.map((book, index) => (
          <div className="cad-inner" key={book.id}>
            <img src={book.img} alt={book.title} className="cad-image" />
            <p className="audio-title">{book.title}</p>
            <button
              className={`btt ${audioStates[index].playing ? 'playing' : ''}`}
              onClick={() => playAudio(index, book.url)}
            >
              {audioStates[index].playing ? '⏸ Pause' : '▶ Play'}
            </button>
            {audioStates[index].playing && (
              <div className="playing-bars">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audiobook;
