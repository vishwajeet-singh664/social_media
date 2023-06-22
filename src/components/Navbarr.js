import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  './Navbar.css'
import { Link } from 'react-router-dom';
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar" style={{background:' background: linear-gradient(to right, #ffffff, #ff80ab);'}}>
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bolder'>MySocial</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-bolder "
            style={{ maxHeight: '100px' }}

            navbarScroll
          >
            <Nav.Link class="text-dark" ><Link to='/home' className='txt'> Home</Link>
           </Nav.Link>
            <Nav.Link ><Link to='/about' className='txt'> About</Link></Nav.Link>
            <Nav.Link ><Link to='/contact' className='txt'> Contact</Link></Nav.Link>
            <Nav.Link ><Link to='/newpost' className='txt'> Create Post</Link></Nav.Link>
         
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;