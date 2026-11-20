import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Category.css';

const Category = () => {
  const genres = [
    {
      to: '/Category1',
      img: 'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-17509-2',
      label: 'Science',
    },
    {
      to: '/Category2',
      img: 'http://cdn.bakerpublishinggroup.com/processed/books/covers/listing/9781441244789.jpg',
      label: 'Historical',
    },
    {
      to: '/Category4',
      img: 'https://alca.rutgers.edu/bio100/campbell6.JPG',
      label: 'Biological',
    },
    {
      to: '/Category3',
      img: 'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
      label: 'Novels',
    },
    {
      to: '/Category5',
      img: 'https://m.media-amazon.com/images/I/71Zq26djSvL.AC_UF1000,1000_QL80.jpg',
      label: 'Mysteries',
    },
  ];

  return (
    <div className="category-wrapper">
      <Navbar />
      <div className="category-header">
        <h2>Browse by Genre</h2>
        <p>Select a category to explore curated book collections</p>
      </div>
      <div className="card-container">
        {genres.map((g, i) => (
          <div className="card" key={i}>
            <Link to={g.to}>
              <img src={g.img} alt={g.label} />
            </Link>
            <p>{g.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
