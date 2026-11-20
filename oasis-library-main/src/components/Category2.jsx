import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './BookCard.css';

const cardsData = [
  {
    id: 1,
    title: 'Reading The Historical Books',
    author: 'Patricia Dutcher-Walls',
    imageUrl:
      'http://cdn.bakerpublishinggroup.com/processed/books/covers/listing/9781441244789.jpg',
    rating: 5,
    description:
      "A student's guide to engaging the biblical texts — reading historical books from a scholarly and contextual perspective.",
  },
  {
    id: 2,
    title: 'Guns, Germs and Steel',
    author: 'Jared Diamond',
    imageUrl:
      'https://m.media-amazon.com/images/I/81y3cMmFKLL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      "Why did some civilizations conquer others? Diamond's Pulitzer Prize-winning exploration of history's greatest question spanning 13,000 years.",
  },
  {
    id: 3,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    imageUrl:
      'https://m.media-amazon.com/images/I/713jIoMO3UL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      'From a renowned historian comes a groundbreaking narrative of humanity\'s creation and evolution exploring how biology and history have shaped human understanding.',
  },
  {
    id: 4,
    title: 'The Silk Roads',
    author: 'Peter Frankopan',
    imageUrl:
      'https://m.media-amazon.com/images/I/81rFMkGCqAL.AC_UF1000,1000_QL80.jpg',
    rating: 5,
    description:
      'A new history of the world — tracing the origins of civilization and trade along the ancient Silk Roads from East to West.',
  },
];

const Category2 = () => {
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
        <h1>Historical</h1>
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

export default Category2;
