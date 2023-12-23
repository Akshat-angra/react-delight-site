import React, { useState, useEffect } from 'react';
import './component/blog.css';

const blogData = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'UPGRADE WITH BLACK COBRA DOORS PREMIUM COLLECTION',
    imageUrl: 'https://th.bing.com/th?id=OIP.PsRBCYp4_I1HUQOicQntWQAAAA&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    publishedDate: 'Published on October 1, 2023',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'Elevate your bathrooms with the Sainik 710 plywood for better Elegance and beauty',
    imageUrl: 'https://th.bing.com/th/id/OIP.XYF8ENZXflua5G6L-SiHyAHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    publishedDate: 'Published on September 30, 2023',
  },
  {
    id: 3,
    title: 'Blog Post 3',
    content: 'This is the content of Blog Post 3.',
    imageUrl: 'https://th.bing.com/th/id/OIP.FCO3ERVOWTApCNY5NC5WLgHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    publishedDate: 'Published on September 5, 2023',
  },
  {
    id: 4,
    title: 'Blog Post 4',
    content: 'This is the content of Blog Post 1.',
    imageUrl: 'https://th.bing.com/th?id=OIP.PsRBCYp4_I1HUQOicQntWQAAAA&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    publishedDate: 'Published on October 1, 2023',
  },
  {
    id: 5,
    title: 'Blog Post 5',
    content: 'Elevate your bathrooms with the Sainik 710 plywood for better Elegance and beauty',
    imageUrl: 'https://th.bing.com/th?id=OIP.PsRBCYp4_I1HUQOicQntWQAAAA&w=286&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    publishedDate: 'Published on September 30, 2023',
  },
  {
    id: 6,
    title: 'Blog Post 6',
    content: 'BLACK COBRA LAMINATES FOR CUSTOMIZED DESIGN SOLUTIONS',
    imageUrl: 'https://th.bing.com/th/id/OIP.FCO3ERVOWTApCNY5NC5WLgHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    publishedDate: 'Published on September 5, 2023',
  },
];

const BlogSection = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % blogData.length);
    }, 5000); // Change posts every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const currentPost = blogData[currentPostIndex];
  const nextPostIndex = (currentPostIndex + 1) % blogData.length;
  const nextPost = blogData[nextPostIndex];

  return (
    <div className="blog-section">
      <h1>LATEST <span className='blogs'>BLOGS</span></h1>
      <p className='pie1'>Keep yourself updated by checking out our blogs that are composed with the aim to bring a new dose of information to the readers</p>
      <div className="blog-posts-container">
        <div className="blog-post">
          <img src={currentPost.imageUrl} alt={currentPost.title} />
          <div className="read-more-container">
          </div>
          <p>{currentPost.content}</p>
          <p>{currentPost.publishedDate}</p>
          <button className="read-more-button" onClick={() => alert(`Read More Clicked for ${currentPost.title}`)}>
            Read More
          </button>
        </div>
        <div className="blog-post">
          <img src={nextPost.imageUrl} alt={nextPost.title} />
          <div className="read-more-container">
          </div>
          <p>{nextPost.content}</p>
          <p>{nextPost.publishedDate}</p>
          <button className="read-more-button" onClick={() => alert(`Read More Clicked for ${nextPost.title}`)}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
