import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOJZ_6jHciemJWfiIYhLg_FEP2hfyeeKxjA&usqp=CAU" alt="Profile" className="profile-pic" />
        <div className="post-user">
          <h3>{post.username}</h3>
          <p>Posted on {post.date}</p>
        </div>
      </div>
      <p>{post.content}</p>
      <div className="post-actions">
        <button className="like-button">Like</button>
        <button className="feedback-button">Give Feedback</button>
      </div>
    </div>
  );
};

export default Post;
