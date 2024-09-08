// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const post = {
    id,
    title: 'Understanding React Hooks',
    date: 'September 3, 2024',
    content: 'Here is the full content of the blog post...',
    // Fetch or add more details for the post
  };

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default BlogPost;
