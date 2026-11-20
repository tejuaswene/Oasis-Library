import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './BookCard.css';

const cardsData = [
  {
    id: 1,
    title: 'The Valley of Mystery',
    author: 'Marc Hilcox',
    imageUrl:
      'https://m.media-amazon.com/images/I/71Zq26djSvL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      'A gripping mystery thriller set in remote valleys where secrets run deeper than the rivers — one detective, one impossible case.',
  },
  {
    id: 2,
    title: 'The Lone Mystery',
    author: 'Viswanath Lakshmisetty',
    imageUrl:
      'https://m.media-amazon.com/images/I/41Jjh5Cij9L.jpg',
    rating: 5,
    description:
      'First season in the Crime Inspired Series — a lone detective faces the most baffling and dangerous case of his career in a city full of secrets.',
  },
  {
    id: 3,
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    imageUrl:
      'https://m.media-amazon.com/images/I/515RpOKHBpL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      "On the morning of Nick and Amy Dunne's fifth wedding anniversary, Amy mysteriously disappears — a psychological thriller like no other.",
  },
  {
    id: 4,
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    imageUrl:
      'https://m.media-amazon.com/images/I/71kDRKYByVL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      "Agatha Christie's most famous thriller — ten strangers are lured to an isolated island, and one by one they begin to die.",
  },
];

const Category5 = () => {
  const handleDownload = (title) => {
    alert(`Download started for: ${title}`);
  };

  return (
    <div className="booklist-wrapper">
      <Navbar />
      <div className="back-nav">
        <Link to="/Category">
          <button className="nav-btn nav-btn-back">&#8592; Back</button>
        </Link>
        <Link to="/Aboutus">
          <button className="nav-btn nav-btn-next">Next &rarr;</button>
        </Link>
      </div>
      <div className="genre-page-header">
        <h1>Mysteries</h1>
      </div>
      <main>
        <section className="cards">
          {cardsData.map((card) => (
            <div className="car" key={card.id}>
              <div className="car-image">
                <img src={card.imageUrl} alt={card.title} />
              </div>
              <div className="car-text">
                <h2>{card.title}</h2>
                <h5>{card.author}</h5>
                <div className="star-icons">
                  {[...Array(card.rating)].map((_, i) => (
                    <span key={i} className="star-icon">★</span>
                  ))}
                </div>
                <p>{card.description}</p>
              </div>
              <div className="car-inner">
                <button
                  className="download-btn"
                  onClick={() => handleDownload(card.title)}
                >
                  Download Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
      <div className="bottom-nav">
        <Link to="/Category">
          <button className="nav-btn nav-btn-back">Back</button>
        </Link>
        <Link to="/Aboutus">
          <button className="nav-btn nav-btn-next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Category5;
