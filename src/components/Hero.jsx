import React, { useState } from 'react';

const Hero = () => {
  // State to manage all input values
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    sortBy: 'relevance',
    type: 'full-time',
    level: 'entry',
  });

  // Generic handler for input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  // Function to clear all filters
  const handleClearAll = () => {
    setFilters({
      category: '',
      location: '',
      sortBy: 'relevance',
      type: 'full-time',
      level: 'entry',
    });
  };

  // Function to handle search
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost/api/jobs?category=${filters.category}&location=${filters.location}&sortBy=${filters.sortBy}&type=${filters.type}&level=${filters.level}`);
      const data = await response.json();
      console.log('Fetched jobs:', data);
      // Update your state or handle the data as needed
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  

  return (
    <div className="hero">
      <div className="search-container">
        <div className="search-fields">
          <input
            type="text"
            placeholder="Search by category"
            className="search-input"
            id="category"
            value={filters.category}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Location"
            className="search-input"
            id="location"
            value={filters.location}
            onChange={handleChange}
          />
          <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="filter-options">
          <label htmlFor="sortBy">Sort by:</label>
          <select
            id="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
          >
            <option value="relevance">Relevance</option>
            <option value="date">Date</option>
          </select>

          <label htmlFor="type">Type:</label>
          <select
            id="type"
            value={filters.type}
            onChange={handleChange}
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="remote">Remote</option>
          </select>

          <label htmlFor="level">Level:</label>
          <select
            id="level"
            value={filters.level}
            onChange={handleChange}
          >
            <option value="entry">Entry</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>

          <button className="clear-btn" onClick={handleClearAll}>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
