import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNewPost = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({
    content: '',
  });

  const handleInputChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    console.log('New Post:', newPost);
    setNewPost({
      content: '',
    });
    navigate('/home');
  };

  return (
    <div className="create-post">
      <h3>Create New Post</h3>
      <form onSubmit={handleCreatePost}>
        <div className="input-container">
          <label>Content:</label>
          <textarea name="content" value={newPost.content} onChange={handleInputChange} required></textarea>
        </div>
        <div className="button-container">
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPost;
