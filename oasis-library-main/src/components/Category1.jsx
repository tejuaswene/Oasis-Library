import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './BookCard.css';

const cardsData = [
  {
    id: 1,
    title: 'The History Of Physics',
    author: 'J.L Heilbron',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/91MdyLTQpBL.AC_UL600_SR600,600.jpg',
    rating: 5,
    description:
      'How does the physics we know today — a highly professionalized enterprise, inextricably linked to government and industry — link back to its origins as a liberal art in Ancient Greece?',
  },
  {
    id: 2,
    title: 'The Origin Of Species',
    author: 'Charles Darwin',
    imageUrl:
      'https://media.npr.org/assets/news/2009/11/23/darwin-d05ce8d77467211f0ed93912a1cca85c8b8a2110.jpg',
    rating: 5,
    description:
      'On the Origin of Species by Means of Natural Selection — considered the foundation of evolutionary biology by Charles Darwin.',
  },
  {
    id: 3,
    title: 'Relativity',
    author: 'Albert Einstein',
    imageUrl:
      'https://m.media-amazon.com/images/I/91xpmt9AjtL.AC_UF350,350_QL80.jpg',
    rating: 5,
    description:
      'The theory of relativity encompasses two interrelated physics theories by Albert Einstein: special relativity and general relativity, proposed in 1905 and 1915 respectively.',
  },
  {
    id: 4,
    title: 'Biological Science',
    author: 'Taylor, N.P.O. Green, G.W. Stout, R. Soper',
    imageUrl:
      'https://m.media-amazon.com/images/I/41RoOmmvLL.jpg',
    rating: 5,
    description:
      'A comprehensive resource for AS Level and A Level biology, covering core and optional materials for a holistic study of the subject.',
  },
  {
    id: 5,
    title: 'Ideas And Opinions',
    author: 'Albert Einstein',
    imageUrl:
      'https://i0.wp.com/www.raptisrarebooks.com/images/185435/ideas-and-opinions-albert-einstein-first-edition-rare.jpg',
    rating: 5,
    description:
      'A German-born theoretical physicist who is widely held to be one of the greatest and most influential scientists of all time. Best known for developing the theory of relativity.',
  },
  {
    id: 6,
    title: 'Electrical Power Transmission System',
    author: 'Turan Gonen',
    imageUrl:
      'https://boilersinfo.com/wp-content/uploads/2018/12/Electrical-Power-Transmission-System-Engineering.jpg',
    rating: 5,
    description:
      'A textbook totally devoted to power distribution engineering — unlike any other on the market, covering real-world system design.',
  },
];

const Category1 = () => {
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
        <h1>Science</h1>
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

export default Category1;
