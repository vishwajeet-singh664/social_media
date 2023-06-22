import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Button, Card, Col, Row, Image } from 'react-bootstrap';
import './post.css';

const Post = ({ post }) => {
  const [likeCount, setLikeCount] = useState(12);

  const increaseLikeCount = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <Card className="post">
      <Card.Header>
        <Row className="align-items-center">
          <Col xs={3}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOJZ_6jHciemJWfiIYhLg_FEP2hfyeeKxjA&usqp=CAU"
              alt="Profile"
              className="profile-pic"
              roundedCircle
            />
          </Col>
          <Col xs={9}>
            <div className="user-info">
              <h3 >{post.username}</h3>
              <p>Posted on {String(post.date).slice(0, 15)}</p>
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <p>{post.content}</p>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center ram">
        <Button
          className="like-button"
          onClick={increaseLikeCount}
          variant="primary"
        >
          <FaHeart className="heart-icon" />
          <span className="like-count">{likeCount}</span>
        </Button>
        <Button className="feedback-button">Give Feedback</Button>
      </Card.Footer>
    </Card>
  );
};

export default Post;
