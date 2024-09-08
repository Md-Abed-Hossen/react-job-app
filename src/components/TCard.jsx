// src/components/TCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './customcss/Card.css';

const TCard = ({ id, title, subtitle, description, logoUrl, companyName, className }) => {
  return (
    <div className={`card ${className || ''}`}>
      <div className="logo">
        {logoUrl && <img src={logoUrl} alt={companyName} />}
      </div>
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <p className="description">{description.slice(0, 100)}...</p>
      <Link to={`/job/${id}`}>
        <button className="button">Details</button>
      </Link>
    </div>
  );
};

export default TCard;
