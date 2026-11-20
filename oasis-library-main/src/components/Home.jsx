import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <div className="content">
        <span className="home-badge">Free & Open Source Digital Library</span>
        <h1>Welcome to <span>Oasis</span> Library</h1>
        <h4>"Having fun isn't hard when you've got a library card."</h4>
        <p>
          A library is a place where books and sources of information are stored.<br />
          Libraries store the energy that fuels the imagination.
        </p>
        <p className="choose-text">Choose it &mdash; Read it</p>
        <div className="home-buttons">
          <Link to="/Category">
            <button type="button" className="btt">
              <span></span>Go to Read
            </button>
          </Link>
          <Link to="/Audiobook">
            <button type="button" className="btt btt-ghost">
              AudioBooks
            </button>
          </Link>
        </div>
        <div className="home-stats">
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">Books</div>
          </div>
          <div className="stat">
            <div className="stat-num">5</div>
            <div className="stat-label">Genres</div>
          </div>
          <div className="stat">
            <div className="stat-num">Free</div>
            <div className="stat-label">Always</div>
          </div>
          <div className="stat">
            <div className="stat-num">Open</div>
            <div className="stat-label">Source</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
