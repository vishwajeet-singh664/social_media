import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import staticData from './staticData';
import Post from './Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr'
import Chat from './Chat';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"

const Home = ({ newPost }) => {
  const [data, setData] = useState(staticData);

  useEffect(() => {
    if (newPost.content.length > 0) setData([...data, newPost]);
  }, []);

  console.log('data', data, newPost);

  return (
    <Container fluid className="homepage">
     <Navbarr/>

<div class="grid">
  <Row>
    <Col>
  <div class="content">
    <h2 className='post-title'>Posts</h2>
    {data.map((post, index) => (
      <Post key={index} post={post} />
      
      )
      )}
  </div>
      </Col>
  <Col>
  <div class="chat">
    <Chat />
  </div>
  </Col>
  </Row>
  
</div>

     
    </Container>
  );
};

export default Home;