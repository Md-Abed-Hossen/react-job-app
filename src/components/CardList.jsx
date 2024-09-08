import React, { useState, useEffect } from 'react';
import './customcss/CardLIst.css';
import TCard from './TCard';
import dummyCards from '../components/data/dummyData'; // Correct path to dummyData.js
import "./customcss/pagination.css";

const CardList = ({ cards }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  if (!cards || cards.length === 0) {
    return <p>No cards available.</p>;
  }

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  useEffect(() => {
    if (totalPages < 1 || currentPage > totalPages) {
      setCurrentPage(1); // Reset current page if it's invalid
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>

    <div className="listing">
      <div className="card-list">
        {currentCards.map((card, index) => (
          <TCard
            key={index}
            {...card}
            className={card.title || card.subtitle || card.description ? '' : 'hidden'}
          
          />
        ))}
      </div>

      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </>
  );
};

export default CardList;
