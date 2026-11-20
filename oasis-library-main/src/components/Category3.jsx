import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './BookCard.css';

const cardsData = [
  {
    id: 1,
    title: 'Soul',
    author: 'Olivia Wilson',
    imageUrl:
      'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
    rating: 5,
    description:
      'A deeply moving novel exploring the human soul — love, loss, and the search for meaning in a beautifully written modern classic.',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    imageUrl:
      'https://m.media-amazon.com/images/I/71FxgtFKcQL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      'A Pulitzer Prize-winning masterwork about racial injustice and the loss of innocence in the American South, told through the eyes of Scout Finch.',
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    imageUrl:
      'https://m.media-amazon.com/images/I/71Q1tPupKjL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      "Jane Austen's timeless romance following Elizabeth Bennet and the proud Mr. Darcy in 19th century England — wit and social commentary at its finest.",
  },
  {
    id: 4,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    imageUrl:
      'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg',
    rating: 5,
    description:
      "Paulo Coelho's enchanting novel about following one's dream and listening to the heart — a modern classic read by millions worldwide.",
  },
];

const Category3 = () => {
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
        <h1>Novels</h1>
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

export default Category3;
