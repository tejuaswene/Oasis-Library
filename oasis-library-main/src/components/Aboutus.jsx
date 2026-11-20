import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-wrapper">
      <Navbar />
      <section className="about">
        <div className="main">
          <img
            src="https://c1.wallpaperflare.com/preview/482/390/476/summer-resting-book-relaxing.jpg"
            alt="Library reading"
          />
          <div className="about-text">
            <h1>About Us</h1>
            <h5>
              Library <span>and Reader</span>
            </h5>
            <p>
              A library is a place where books and sources of information are stored.
              They make it easier for people to get access to them for various purposes.
              Libraries are very helpful and economical too. They include books, magazines,
              newspapers, DVDs, manuscripts and more.
            </p>
            <Link to="/Conatct">
              <button className="button">Let's Talk</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
