import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './BookCard.css';

const cardsData = [
  {
    id: 1,
    title: 'Campbell Biology',
    author: 'Jane B. Reece',
    imageUrl: 'https://alca.rutgers.edu/bio100/campbell6.JPG',
    rating: 5,
    description:
      'The gold standard in biology education — a comprehensive resource covering life science from cells to ecosystems, used in colleges worldwide.',
  },
  {
    id: 2,
    title: 'The Gene: An Intimate History',
    author: 'Siddhartha Mukherjee',
    imageUrl:
      'https://m.media-amazon.com/images/I/81UASoAzjyL.jpg',
    rating: 5,
    description:
      "From Mendel's garden to the era of genetic engineering and CRISPR — a sweeping history of one of the most important concepts in science.",
  },
  {
    id: 3,
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    imageUrl:
      'https://m.media-amazon.com/images/I/41CJnGGsYCL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      'Richard Dawkins proposes that our genes shaped us and our behavior — a landmark book that redefined our understanding of evolution.',
  },
  {
    id: 4,
    title: 'Molecular Biology of the Cell',
    author: 'Bruce Alberts',
    imageUrl:
      'https://m.media-amazon.com/images/I/51Bfx7CaECL.jpg',
    rating: 5,
    description:
      "The world's leading cell biology textbook — covering molecular mechanisms of life with clear explanations and beautiful illustrations.",
  },
];

const Category4 = () => {
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
        <h1>Biological</h1>
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

export default Category4;
