// src/components/Blog.jsx
import React from 'react';
import './customcss/Blog.css'; // Optional: Add your styling here
import Navbar from './Navbar'; 
import Footer from './footer'; 

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      date: 'September 3, 2024',
      excerpt: 'A deep dive into React Hooks and how they can simplify your code.',
    },
    {
      id: 2,
      title: 'Building a REST API with Laravel',
      date: 'August 29, 2024',
      excerpt: 'Learn how to build a scalable REST API using Laravel.',
    },
    // Add more blog posts here
  ];

  return (
    <>
    <Navbar/>
    <div className="blog">
      <h1>My Blog</h1>
      <div className="posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
