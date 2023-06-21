import React from 'react';
import './home.css';
import staticData from './staticData';
import Post from './Post';

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to MySocial</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/about">About</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
            <li className="nav-item"><a href="/newpost">Create Post</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <h2>Posts</h2>
        {staticData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
